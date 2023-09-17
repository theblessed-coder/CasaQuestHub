import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      {/* (Logo and Brand Name) */}
      <div className="flex items-center">
        <img
          src="frontend\src\images\logo.png"
          alt="CasaQuestHub Logo"
          className="h-8 mr-2"
        />
        <span className="text-xl font-bold">CasaQuestHub</span>
      </div>

      {/* (Navigation Links) */}
      <nav className="flex items-center">
        <a
          href="/"
          className="mr-4 text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out"
        >
          Home
        </a>

        {/* Listings Dropdown */}
        <div className="relative inline-block mr-4">
          <span className="text-yellow-500 cursor-pointer hover:translate-y-[-5px] transition duration-500 ease-in-out">
            Listings
          </span>
          <div className="absolute hidden mt-2 bg-white text-gray-800 border border-gray-300 p-2 space-y-2">
            <a href="/residential">Residential</a>
            <a href="/commercial">Commercial</a>
            <a href="/land">Land</a>
          </div>
        </div>

        <a
          href="/about"
          className="mr-4 text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="mr-4 text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out"
        >
          Contact Us
        </a>
        <a
          href="/signup"
          className="mr-4 text-black bg-yellow-500 px-2 py-1 rounded hover:translate-y-[-5px] transition duration-500 ease-in-out"
        >
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Header;
