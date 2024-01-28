import connectToDB from "@/database";
import User from "@/models/user";
import { compare } from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


const schema = Joi.object({

    email : Joi.string().email().required(),
    password : Joi.string().required(),

});


export const dynamic = 'force-dynamic';

export async function POST(req) {

    await connectToDB(); //konektohemi me database

    const  {email, password} = await req.json();

    const {error} = schema.validate({email,password}) //prap validimi i skemes si te register
    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details[0]
        })
    }
    try{
        //check if user exists
        const checkUser = await User.findOne({email});
        if(!checkUser) {
            return NextResponse.json({
                success: false,
                message: 'Account does not exist '
            })
        }
        const checkPassword = await compare(password, checkUser.password);
        if(!checkPassword) {
            return NextResponse.json({
                success: false,
                message: 'Incorrect password!'
            });
        }

        const token = jwt.sign({
            id : checkUser._id , email : checkUser?.email, role: checkUser?.role //this is created by mongodb every save.

        }, 'default_secret_key', {expiresIn : '1d'}); //nji secret token key qe mbaron per 1 dite

        const finalData = {
            token,
            user :
             {
                email: checkUser.email,
                name: checkUser.name,
                _id: checkUser._id,
                role: checkUser.role,

            }
        }
        return NextResponse.json({
            success : true,
            message : 'Login successfully',
            finalData
        });
    } 
    catch(e) {
        console.log('Error in login')
        return NextResponse.json({
            success: false,
            message: 'Something went wrong , try again '
        }) 
    }
}