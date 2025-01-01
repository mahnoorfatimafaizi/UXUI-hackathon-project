"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open,setOpen] = useState(false)
  return (
    <div className="md:hidden">
        <Image  src="/images/menu.png" alt="menu" width={28} height={28} className="cursor-pointer"
        onClick={ () => setOpen((prev) => !prev)}/>{
            open && (
                <div className="absolute bg-customPurple text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 ">

<div className="flex items-center gap-6">
<Link href="/">Home</Link>
        <span>&#128900;</span>
        <Link href="/pages/about">About</Link>
        <span>&#128900;</span>
        <Link href="/pages/contact">Contact</Link>
        </div>
                    <Link href= "/categories/plantpots">Plant pots</Link>
                    <Link href= "/categories/plantpots">Ceramics</Link>
                    <Link href= "/categories/plantpots">Tables</Link>
                    <Link href= "/categories/plantpots">Chairs</Link>                
                    <Link href= "/categories/plantpots">Crockery</Link>
                    <Link href= "/categories/plantpots">Tableware</Link>
                    <Link href= "/categories/plantpots">Cutlery</Link>
                    </div>
            )
        }

    </div>
  )
}

export default Menu