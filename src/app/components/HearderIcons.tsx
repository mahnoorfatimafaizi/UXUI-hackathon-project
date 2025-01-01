"use client";

import Image from "next/image";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import ShoppingCartModel from "./ShoppingCartModel";
import SearchCartModel from "./SearchCartModel";


const HeaderIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isSearchCartOpen, setIsSearchOpen] = useState(false);


  const router = useRouter();


  // TEMPORARY
const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };



  return (
    <div className=" hidden md:flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/images/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        // onClick={login}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">
            Logout
          </div>
        </div>
      )}
      <div className="cursor-pointer ">
      <Image 
      src="/images/cart.png"
      alt=""
      width={22}
      height={22}
      onClick={() => setIsShoppingCartOpen((prev) => !prev)} />
      </div>

      {isShoppingCartOpen && (
        <ShoppingCartModel />
      )}

<div className="hidden sm:flex items-center">
      <div className="cursor-pointer">
      <Image 
      src="/images/search.png"
      alt=""
      width={22}
      height={22}
      onClick={() => setIsSearchOpen((prev) => !prev)} />

      </div>

      {isSearchCartOpen && (
        <SearchCartModel />
      )}

      
    
    </div>
    </div>
  );
};

export default HeaderIcons;