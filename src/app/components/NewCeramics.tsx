"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    image: "/images/chair.png",
    title: "The Dandy chair",
    price: "£250",
  },
  {
    image: "/images/vase-set.png",
    title: "Rustic Vase Set",
    price: "£155",
  },
  {
    image: "/images/vase.png",
    title: "The Silky Vase",
    price: "£125",
  },
  {
    image: "/images/lamp.png",
    title: "The Lucy Lamp",
    price: "£399",
  },
];

const NewCeramics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-5 mx-auto mt-16 mb-8 bg-gray-50 w-full max-w-[1440px]">
      <h2 className="text-3xl font-clash text-left mb-5">New ceramics</h2>

      {/* Slider for Small Screens */}
      <div className="block sm:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={350}
                height={380}
                className="object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-2 text-customPurple">
                  {product.title}
                </h3>
                <p className="text-customPurple">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10"
        >
          ▶
        </button>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-blue rounded-lg shadow-md overflow-hidden">
            {/* Corrected Link Path */}
            <Link href={`/product/${product.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={350}
                height={380}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2 text-customPurple">
                  {product.title}
                </h3>
                <p className="text-customPurple">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="./listing">
          <button className="px-6 py-2 text-customPurple bg-gray-100 rounded-lg hover:bg-customPurple hover:text-white">
            View collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewCeramics;








