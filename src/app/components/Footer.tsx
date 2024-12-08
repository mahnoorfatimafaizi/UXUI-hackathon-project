// components/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customPurple text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Menu Section */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Our company</h3>
            <ul className="space-y-2 text-sm">
            <li>
            <Link href="/about">
              About us
            </Link>
          </li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Join Our Mailing List Section */}
          <div>
            <h3 className="font-semibold mb-4">Join our mailing list</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 px-8 text-black rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 text-customPurple bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t text-customPurple pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">Copyright 2022 Axion LTD</p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-customPurple">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
