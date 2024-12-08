import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component

const products = [
  {
    image: "/images/sofa.jpg",
    title: "The Poplan suede sofa",
    price: "£980",
    slug: "poplan-suede-sofa",
  },
  {
    image: "/images/chair1.png",
    title: "The Dandy chair",
    price: "£250",
    slug: "dandy-chair",
  },
  {
    image: "/images/chair3.png",
    title: "The Luxe chair",
    price: "£300",
    slug: "luxe-chair",
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-white py-16 px-5 mx-auto mt-16 mb-16 max-w-[1440px]">
      <h2 className="text-3xl mb-12 text-center">Our popular products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-8 items-stretch px-4 md:px-0">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/product/${product.slug}`} // Dynamic link to the product page
            passHref
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <Image
                src={product.image}
                alt={product.title}
                width={index === 0 ? 630 : 305}
                height={375}
                className="object-cover w-full h-[375px]"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-medium text-lg mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          </Link>
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

export default PopularProducts;








