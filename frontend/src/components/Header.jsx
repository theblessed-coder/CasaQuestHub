import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div
        onClick={toggleDropdown}
        className="dropdown-toggle text-yellow-500 pr-4 cursor-pointer hover:translate-y-[-5px] transition duration-500 ease-in-out"
      >
        Listings <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <ul className="dropdown-menu absolute mt-5 bg-slate-500 text-white p-5 space-y-5">
          <li>
            <Link to="/residential">Residential</Link>
          </li>
          <li>
            <Link to="/commercial">Commercial</Link>
          </li>
          <li>
            <Link to="/land">Land</Link>
          </li>
        </ul>
      )}
    </div>
  );
};


const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      {/* (Logo and Brand Name) */}
      <div className="flex items-center">
        <img
          src="./images/logo.png"
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
        <Dropdown />

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
