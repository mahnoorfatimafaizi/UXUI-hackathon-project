import Image from 'next/image';
import Header from '../components/Header';
import BrandFeatures from '../components/BrandFeatures';
import NewsletterSignup from '../components/NewsletterSignup';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[20px] md:h-[30px] mb-5">
        <Image
          src="/images/about.png" // Update with your banner image path
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
      <Header />
      {/* Header Section */}
      <section className="text-center px-4 py-12">
        
        <h1 className="text-2xl md:text-4xl font-light text-gray-800">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </h1>
        
        
        <div className="text-center mt-8">
        <Link href="./listing">
          <button className="px-6 py-2 text-customPurple bg-gray-100 rounded-lg hover:bg-customPurple hover:text-white">
            View our products
          </button>
        </Link>
      </div>
        
      </section>

      {/* First Content Section */}
      <section className="grid md:grid-cols-2 gap-2 px-6 py-12 mx-[50px]">
        <div className="bg-gray-900 text-white flex flex-col justify-center px-10">
          <h2 className="text-2xl font-bold py-8">It started with a small idea</h2>
          <p className="text-5px leading-relaxed py-10">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <div className='py-20'>
          <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-700 mt-10">
            Get in touch
          </button>
          </div>
        </div>
        <div>
          <Image
            src="/images/section2.png" // Replace with actual image path
            alt="Yellow chair"
            layout="responsive"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </section>

      {/* Second Content Section */}
      <section className="grid md:grid-cols-2 gap-2  py-12">
        <div>
          <Image
            src="/images/section3.png" // Replace with actual image path
            alt="Interior design"
            layout="responsive"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-center px-12">
          <h2 className="text-2xl font-bold py-8">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h2>
          <p className="text-5px leading-relaxed">
            When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className='text-5px leading-relaxed py-10'>
            Handcrafted and lovingly crafted furniture and homeware is what we live, breathe, and design.
          </p>
          <div className='py-20'>
          <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-700 mt-10">
            Get in touch
          </button>
          </div>
        </div>
      </section>
      <BrandFeatures />
      <NewsletterSignup />
    </div>
  );
}



