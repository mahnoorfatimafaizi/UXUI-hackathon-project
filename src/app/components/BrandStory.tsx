// components/BrandStory.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandStory = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="">
          <h2 className="text-2xl lg:text-4xl font-semibold text-customPurple mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-customPurple mb-4 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-customPurple mb-6 leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <div className="py-9 mb-10">
          <Link href="./about">
          <button className="px-6 py-2 text-customPurple bg-gray-100 rounded-lg hover:bg-customPurple hover:text-white">
            Get in touch
          </button>
          </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="gap-6">
          <Image
            src="/images/brandstory.png"
            alt="Stylish interior with sofa and decor"
            width={800} // Define width for responsive sizing
            height={500} // Define height for the image
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
