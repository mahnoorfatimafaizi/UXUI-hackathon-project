"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open,setOpen] = useState(false)
  return (
    <div>
        <Image  src="/images/menu.png" alt="menu" width={28} height={28} className="cursor-pointer"
        onClick={ () => setOpen((prev) => !prev)}/>{
            open && (
                <div className="absolute bg-customPurple text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href= "/">Plant pots</Link>
                    <Link href= "/">Ceramics</Link>
                    <Link href= "/">Tables</Link>
                    <Link href= "/">Chairs</Link>                
                    <Link href= "/">Crockery</Link>
                    <Link href= "/">Tableware</Link>
                    <Link href= "/">Cutlery</Link>
                    </div>
            )
        }

    </div>
  )
}

export default Menu