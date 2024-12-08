import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/images/Delivery.png", 
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
  },
  {
    icon: "/images/Checkmark--outline.png",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    icon: "/images/Purchase.png",
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere.",
  },
  {
    icon: "/images/Sprout.png",
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable.",
  },
];

const BrandFeatures = () => {
  return (
    <section className="py-11 bg-white text-center mx-auto md:mx-0 px-6 md:px-0 w-full max-w-[1440px] h-auto md:h-[355px] mb-10">
      <h2 className=" mx-auto md:ml-[529px] w-[274px] md:w-[366px] text-[20px] md:text-[24px] leading-[28px] md:leading-[33.6px] font-clash font-normal underline md:no-underline text-customPurple mb-9">What makes our brand different</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className=" mx-auto md:ml-[86px] w-[342px] md:w-[270px]  flex flex-col gap-4 md:gap-[16px] text-customPurple">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={24}
              height={24}
              className="mb-4"
            />
            
            <h3 className="font-medium text-lg ">{feature.title}</h3>
            <p className="text-customPurple">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandFeatures;


