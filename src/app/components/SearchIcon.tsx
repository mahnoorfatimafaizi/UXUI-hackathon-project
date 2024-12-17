"use client";

import Image from "next/image";
import { useState } from "react";
import SearchCartModel from "./SearchCartModel";



const SearchIcon = () => {
  const [isSearchCartOpen, setIsSearchOpen] = useState(false);



  return (
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
  );
};

export default SearchIcon;