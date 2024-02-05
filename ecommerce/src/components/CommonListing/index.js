//KY ESHT KOMPONENTI KUR JEMI TE ALL-PRODUCTS, QE SHFAQ CDO SEND QE PRODUKT
'use client'

import ProductTile from "./ProductTile"
import ProductButton from "./ProductButtons"

const dummyData = [
    {
_id :'65c0e22e4a1d754f7fc96488',
name :"Spurs Flag",
description: "lorem oasidhjoasdklasdj",
price : 20,
category : "men",

sizes : [
    {
        id: 's',
        label: 'S'
    }
],
deliveryInfo: "free",
onSale: "yes",
priceDrop: 5,
imageUrl : "https://firebasestorage.googleapis.com/v0/b/next-js-ecommerce-1e2b9.appspot.com/o/ecommerce%2Fbannas.jpg-1707139601346-vaw6uosub1?alt=media&token=121b601c-65b7-448d-82a1-c1114afbdd24",
    }
]

export default function CommonListing() {

    return <section
    className="bg-white py-12 sm:py-16"
    >
    <div className="mx-auto max-2-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-col-4 sm:gap-4 lg:mt-16">
    {
        dummyData && dummyData.length ?
        dummyData.map(item => (
            <article className="relative flex flex-col overflow-hidden border cursor-pointer" key={item._id}>
                <ProductTile item={item}/>
                <ProductButton item={item} />
            </article>
            ))
            : null
        } 
    </div>
    </div>
    </section>
}