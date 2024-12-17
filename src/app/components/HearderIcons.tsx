"use client";

import Image from "next/image";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import ShoppingCartModel from "./ShoppingCartModel";


const HeaderIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);


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
    <div className="flex items-center gap-4 xl:gap-6 relative">
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
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-customPurple rounded-full text-white text-sm flex ic justify-center">2</div>
      </div>

      {isShoppingCartOpen && (
        <ShoppingCartModel />
      )}

      
    
    </div>
  );
};

export default HeaderIcons;