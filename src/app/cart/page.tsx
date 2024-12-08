import React from "react";
import Image from "next/image";
import Header from "../components/Header";


const cartItems = [
  {
    id: 1,
    image: "/images/vase.png", 
    title: "Graystone vase",
    description: "A timeless ceramic vase with a tri-color grey glaze.",
    price: "£85",
    quantity: 1,
    total: "£85",
  },
  {
    id: 2,
    image: "/images/vase-set.png", 
    title: "Basic white vase",
    description: "Beautiful and simple, this is one for the classics.",
    price: "£125",
    quantity: 1,
    total: "£125",
  },
];

const cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + parseInt(item.total.slice(1)), 0);

  return (
    <section>
        <Header />

    <div className="bg-gray-50 min-h-screen py-12 px-6 w-full max-w-[1440px] mx-auto">
        
      {/* Title */}
      <h1 className="text-3xl md:text-4xl text-gray-900 mb-8">
        Your shopping cart
      </h1>

      {/* Cart Table */}
      <div className="overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm">
        <table className="w-full table-auto">
          {/* Table Header */}
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Product</th>
              <th className="text-center py-4 px-6 font-medium text-gray-700">Quantity</th>
              <th className="text-right py-4 px-6 font-medium text-gray-700">Total</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                {/* Product Details */}
                <td className="py-6 px-6">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      <p className="text-gray-900 font-medium mt-2">{item.price}</p>
                    </div>
                  </div>
                </td>

                {/* Quantity */}
                <td className="text-center py-6 px-6">
                  <span className="inline-block px-4 py-2 border border-gray-300 rounded-lg">
                    {item.quantity}
                  </span>
                </td>

                {/* Total */}
                <td className="text-right py-6 px-6 font-medium text-gray-900">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-8 flex flex-col md:flex-row md:justify-end md:items-center gap-6">
        <div className="text-right">
          <p className="text-gray-700 text-sm">Taxes and shipping are calculated at checkout</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">Subtotal: <span className="text-customPurple">{`£${subtotal}`}</span></p>
        </div>

        {/* Checkout Button */}
        <button className="px-6 py-3 bg-customPurple text-white font-medium rounded-lg hover:bg-purple-700 transition">
          Go to checkout
        </button>
      </div>
      </div>
    </section>

    
  );
};

export default cart;
