"use client"; // This marks the component as a Client Component

import { useParams } from "next/navigation";
import Image from "next/image";
import NewCeramics from "@/app/components/NewCeramics";
import BrandFeatures from "@/app/components/BrandFeatures";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import Header from "@/app/components/Header";

// Define the Product type
type Product = {
  title: string;
  price: string;
  description: string;
  features: string[];
  dimensions: { height: string; width: string; depth: string };
  image: string;
};

// Correctly typed product data
const productData: Record<string, Product> = {
  "the-dandy-chair": {
    title: "The Dandy Chair",
    price: "£250",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
    features: [
      "Premium material",
      "Handmade upholstery",
      "Quality timeless classic",
    ],
    dimensions: { height: "100cm", width: "75cm", depth: "50cm" },
    image: "/images/chair.png",
  },
  "rustic-vase-set": {
    title: "Rustic Vase Set",
    price: "£155",
    description:
      "A charming set of vases with a rustic finish, perfect for any home.",
    features: ["Rustic finish", "Handmade craftsmanship"],
    dimensions: { height: "30cm", width: "15cm", depth: "15cm" },
    image: "/images/vase-set.png",
  },
  "the-silky-vase": {
    title: "The Silky Vase",
    price: "£125",
    description:
      "A sleek and elegant vase that enhances the beauty of any flower arrangement.",
    features: ["Sleek design", "High-quality ceramic"],
    dimensions: { height: "40cm", width: "20cm", depth: "20cm" },
    image: "/images/vase.png",
  },
  "the-lucy-lamp": {
    title: "The Lucy Lamp",
    price: "£399",
    description:
      "An exquisite lamp that provides warm light and elevates the aesthetics of your room.",
    features: ["Warm light", "Modern design", "Durable build"],
    dimensions: { height: "60cm", width: "30cm", depth: "30cm" },
    image: "/images/lamp.png",
  },
};

export default function ProductPage() {
  const { slug } = useParams();

  // Ensure slug is a string (not an array)
  const singleSlug = Array.isArray(slug) ? slug[0] : slug;

  // Safely retrieve the product by slug
  const product = productData[singleSlug];

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-700">
          Product not found
        </h1>
      </div>
    );
  }

  const { title, price, description, features, dimensions, image } = product;

  return (
    <div>
      <Header />
      <div className="px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Product Image */}
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded-lg"
          />
          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">{price}</p>
            <p className="text-gray-600 mb-6">{description}</p>

            <h2 className="text-lg font-semibold mb-2">Features:</h2>
            <ul className="list-disc pl-5 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-2">Dimensions:</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Height:</span> {dimensions.height}
              </p>
              <p>
                <span className="font-medium">Width:</span> {dimensions.width}
              </p>
              <p>
                <span className="font-medium">Depth:</span> {dimensions.depth}
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <label htmlFor="amount" className="text-gray-700">Amount</label>
                <input
                  id="amount"
                  type="number"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-16 text-center"
                  defaultValue={1}
                />
              </div>

              <button className="mt-4 px-8 py-3 bg-customPurple text-white rounded-lg hover:bg-purple-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Other Components */}
        <NewCeramics />
        <BrandFeatures />
        <NewsletterSignup />
      </div>
    </div>
  );
}






