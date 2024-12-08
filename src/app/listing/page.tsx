import React from "react";
import Image from "next/image";

const AllProductsPage = () => {
  // Sample products data
  const products = [
    { id: 1, name: "The Dandy Chair", price: "£250", img: "/images/chair1.png" },
    { id: 2, name: "Rustic Vase Set", price: "£155", img: "/images/prd2.png" },
    { id: 3, name: "The Silky Vase", price: "£125", img: "/images/prd3.png" },
    { id: 4, name: "The Lucy Lamp", price: "£399", img: "/images/prd4.png" },
    { id: 5, name: "The Dandy Chair", price: "£250", img: "/images/prd5.png" },
    { id: 6, name: "Rustic Vase Set", price: "£155", img: "/images/prd6.png" },
    { id: 7, name: "The Silky Vase", price: "£125", img: "/images/prd7.png" },
    { id: 8, name: "The Lucy Lamp", price: "£399", img: "/images/prd8.png" },
    { id: 9, name: "The Dandy Chair", price: "£250", img: "/images/chair1.png" },
    { id: 10, name: "Rustic Vase Set", price: "£155", img: "/images/prd2.png" },
    { id: 11, name: "The Silky Vase", price: "£125", img: "/images/prd3.png" },
    { id: 12, name: "The Lucy Lamp", price: "£399", img: "/images/prd4.png" },
  ];

  return (
    <div>
       <div className="relative w-full h-[100px] md:h-[150px] mb-5">
        <Image
          src="/images/all-products.png" // Update with your banner image path
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
    <div className="space-y-16 px-4 sm:px-8 lg:px-16">


      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center border-b pb-4 space-y-4 sm:space-y-0">
  {/* First Row: Category Filters */}
  <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Category</option>
    </select>
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Product type</option>
    </select>
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Price</option>
    </select>
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Brand</option>
    </select>
  </div>

  {/* Second Row: Sorting Filters */}
  <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Sorting by</option>
    </select>
    <select className="border p-2 rounded-lg w-full sm:w-auto">
      <option>Date added</option>
    </select>
  </div>
</div>


      {/* Products Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="space-y-4 text-center">
            <div className="relative w-full h-80">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </section>

      {/* View Collection Button */}
      <div className="text-center">
        <button className="bg-gray-900 text-white px-6 py-3 text-sm rounded-lg hover:bg-gray-700 mb-8">
          View collection
        </button>
      </div>
    </div>
    </div>
  );
};

export default AllProductsPage;

