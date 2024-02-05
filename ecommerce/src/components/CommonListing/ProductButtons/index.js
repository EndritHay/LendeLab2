'use client'

import { usePathname } from "next/navigation"

export default function ProductButton(){

    const pathName = usePathname()

    const isAdminView = pathName.includes('admin-view')

    //retutning whether is admin or client buttons.
    return isAdminView ? (
    <>
    <button 
    className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase trackig-wide text-white"
    >Update</button>
    <button
    className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase trackig-wide text-white"
    >Delete</button>
    </>
    ):( 
     <>
     <button
    className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase trackig-wide text-white"     
     >
    Add to cart
     </button>
     </>
    );
}

