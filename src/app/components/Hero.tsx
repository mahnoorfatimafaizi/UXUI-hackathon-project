import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-stretch">
        {/* Text Content */}
        <div className="flex-grow bg-customPurple text-white p-6 lg:p-12 flex-col">
          <h1 className="text-3xl lg:text-4xl leading-tight mb-4">
            The furniture brand for the <br /> future, with timeless designs
          </h1>

          <Link href="./listing">
            <button className="bg-gray-200 text-indigo-900 px-6 py-3 mt-5 font-medium rounded-md hover:bg-gray-300">
              View collection
            </button>
          </Link>

          <p className="text-gray-200 pt-20 mt-10 sm:pt-48 sm:mt-20">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 hidden sm:block">
          <Image
            src="/images/chair.png" 
            alt="Chair Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

