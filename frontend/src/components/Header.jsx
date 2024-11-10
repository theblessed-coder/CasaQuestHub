import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div
        onClick={toggleDropdown}
        className="dropdown-toggle text-xl sm:text-base pr-4 text-yellow-500 cursor-pointer hover:translate-y-[-5px] transition duration-500 ease-in-out"
      >
        Listings <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <ul
          onMouseLeave={toggleDropdown}
          onClick={toggleDropdown}
          className="dropdown-menu absolute mt-5 bg-black text-sm text-yellow-500 p-5 space-y-5"
        >
          <li className="hover:underline hover:underline-offset-2 text-xl">
            <Link to="/residential" className="text-base">
              Residential
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-2 text-xl">
            <Link to="/commercial" className="text-base">
              Commercial
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-2 text-xl">
            <Link to="/land" className="text-base">
              Land
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-black text-white p-4 ${
        isMobile ? "relative" : "sticky top-0 z-10"
      }`}
    >
      <div className="flex justify-between items-center">
        {!isMenuOpen && ( // Show logo when menu is closed
          <div className="flex items-center">
            <a href="/">
              <img
                src="./images/logo.png"
                alt="CasaQuestHub Logo"
                className="h-8 mr-2"
              />
            </a>
            <span className="sm:text-xl font-bold hidden sm:block">
              CasaQuestHub
            </span>
          </div>
        )}

        {isMobile && !isMenuOpen && (
          <div className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </div>
        )}

        {(isMobile && isMenuOpen) || !isMobile ? (
          <nav
            className={`sm:flex items-center ${
              isMobile ? "flex-col w-full mt-12 my-5" : "ml-auto"
            }`}
          >
            <a
              href="/"
              className={`block text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out ${
                isMobile ? "w-full my-5 text-xl" : "mr-4"
              }`}
              onClick={closeMenu}
            >
              Home
            </a>

            <Dropdown />

            <a
              href="/about"
              className={`block text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out ${
                isMobile ? "w-full my-5 text-xl" : "mr-4"
              }`}
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="/contact"
              className={`block text-yellow-500 hover:translate-y-[-5px] transition duration-500 ease-in-out ${
                isMobile ? "w-full my-5 text-xl" : "mr-4"
              }`}
              onClick={closeMenu}
            >
              Contact Us
            </a>
            <a
              href="/signup"
              className={`block text-black bg-yellow-500 px-2 py-1 rounded hover:translate-y-[-5px] transition duration-500 ease-in-out ${
                isMobile ? "w-full py-3 my-5 text-xl" : "mr-4"
              }`}
              onClick={closeMenu}
            >
              Sign Up
            </a>
          </nav>
        ) : null}
      </div>
      {isMobile && isMenuOpen && (
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-2xl cursor-pointer"
            onClick={closeMenu}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
