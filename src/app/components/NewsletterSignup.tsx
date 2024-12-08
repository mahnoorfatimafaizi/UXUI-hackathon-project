// components/NewsletterSignup.tsx
import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="py-10 mb-10 bg-gray-100 text-center mt-6">
      <h2 className="text-4xl mb-5 text-customPurple">Join the club and get the benefits</h2>
      <p className="mb-10 py-5 text-customPurple">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
      </p>
      <form className="max-w-md mx-auto flex items-center space-x-4 text-customPurple">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-customPurple focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white  rounded- bg-customPurple"
        >
          Sign up
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
