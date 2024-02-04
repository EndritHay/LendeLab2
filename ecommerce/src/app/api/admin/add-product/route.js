import Product from "@/components/models/product";
import connectToDB from "@/database";
import { NextResponse } from "next/server";


//product i add-product schema pret kto te dhena
const AddNewProductSchema = Joi.object({
    name : Joi.string().required(),
    description : Joi.string().required(),
    price : Joi.number().required(),
    category : Joi.string().required(),
    sizes : Joi.array().required(),
    deliveryInfo : Joi.string().required(),
    onSale : Joi.string().required(),
    priceDrop : Joi.number().required(),
    imageUrl : Joi.string().required()

})

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        await connectToDB();
        const user = 'admin';
        if(user === 'admin') {
            const extractData = await req.json()
            const{
                name,description,price,imageUrl,category,sizes,deliveryInfo,onSale,priceDrop
            } = extractData;

            const{error} = AddNewProductSchema.validate({
                name,description,price,imageUrl,category,sizes,deliveryInfo,onSale,priceDrop

            });
            if (error) {
                return NextResponse.json({
                    success: false,
                    message: error.details[0].message,
                });
            }

            const newlyCreatedProduct = await Product.create(extractData);

            if(newlyCreatedProduct) {
                return NextResponse.json({
                    success: true,
                    message: 'Product added successfully',
                });
            } else {
                return NextResponse.json({
                    success: false,
                    message: 'Failed to add the product',
                });
            }

        }else {
            return NextResponse.json({
                success: false,
                message: 'Not authorised '
            })
        }

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong , try again '
        })
    }
}