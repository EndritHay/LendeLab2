
import connectToDB from "@/database";
import Joi from "joi";
import User from "@/models/user";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

//kontrollimi i userave

const schema = Joi.object({

    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),

})

export const dynamic = 'force-dynamic';

export async function POST(req) {

    await connectToDB();

    const { name, email, password, role } = await req.json();
    //validatimi i schemas

    const { error } = schema.validate({ name, email, password, role })

    //nese ka error schema
    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details[0]
        })
    }

    //saving to database 

    try {
        //nese useri egsiston
        const isUserAlreadyExists = await User.findOne({ email });

        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: 'User already exists , please try with different email'
            })
        } else {
            //useri krijohet per here te pare
            const hashPassword = await hash(password, 12);
            const newlyCreatedUser = await User.create({

                name, email, password: hashPassword, role
            })
            //newly.. is true this will execute
            if (newlyCreatedUser) {
                return NextResponse.json({
                    success: true,
                    message: 'Account created successfully'
                })
            }
        }

    }
    catch (error) {
        console.log('Error in registration')
        return NextResponse.json({
            success: false,
            message: 'Something went wrong , try again '
        })
    }

}
