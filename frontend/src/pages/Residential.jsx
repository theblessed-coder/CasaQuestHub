import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Residential = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const residentialListings = [
    {
      id: 1,
      title: "Beautiful Family Home",
      location: "Victoria Island, Lagos",
      price: "1,600,000.00",
      description:
        "A spacious family home with a large backyard and modern amenities.",
      imageUrl: "./images/residential-01.jpg",
    },

    {
      id: 2,
      title: "Family Home in Abuja",
      location: "Asokoro, Abuja",
      price: "1,200,000.00",
      description:
        "This spacious family home is nestled in a serene neighborhood in Asokoro, Abuja, offering a perfect blend of comfort and elegance.",
      imageUrl: "./images/residential-02.jpg",
    },

    {
      id: 3,
      title: "Tranquil Estate in Port Harcourt",
      location: "GRA Phase 3, Port Harcourt",
      price: "2,000,000.00",
      description:
        "Experience sophistication in this sleek penthouse, featuring high-end finishes and panoramic city views.",
      imageUrl: "./images/residential-03.jpg",
    },

    {
      id: 4,
      title: "Elegant Mansion in Kano",
      location: "Nasarawa GRA, Kano",
      price: "1,800,000.00",
      description:
        "Experience luxury living in this grand mansion situated in the upscale Nasarawa GRA of Kano.",
      imageUrl: "./images/residential-04.jpg",
    },

    {
      id: 5,
      title: "Sleek Penthouse in Owerri",
      location: "New Owerri, Imo",
      price: "1,800,000.00",
      description:
        "Escape the hustle and bustle in this serene estate, offering lush greenery and premium amenities.",
      imageUrl: "./images/residential-05.jpg",
    },

    {
      id: 6,
      title: "Riverside Bungalow in Calabar",
      location: "Marina Resort, Calabar",
      price: "2,200,000.00",
      description:
        "Enjoy picturesque views of the Calabar River from this charming bungalow in Marina Resort.",
      imageUrl: "./images/residential-06.jpg",
    },

    {
      id: 7,
      title: "Beautiful Family Home",
      location: "Victoria Island, Lagos",
      price: "1,600,000.00",
      description:
        "A spacious family home with a large backyard and modern amenities.",
      imageUrl: "./images/residential-01.jpg",
    },

    {
      id: 8,
      title: "Family Home in Abuja",
      location: "Asokoro, Abuja",
      price: "1,200,000.00",
      description:
        "This spacious family home is nestled in a serene neighborhood in Asokoro, Abuja, offering a perfect blend of comfort and elegance.",
      imageUrl: "./images/residential-02.jpg",
    },

    {
      id: 3,
      title: "Tranquil Estate in Port Harcourt",
      location: "GRA Phase 3, Port Harcourt",
      price: "2,000,000.00",
      description:
        "Experience sophistication in this sleek penthouse, featuring high-end finishes and panoramic city views.",
      imageUrl: "./images/residential-03.jpg",
    },
  ];

  const filteredListings = residentialListings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.price.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Residential Listings</h1>
      <div className="flex justify-end mb-4">
        <input
          className="p-2 border border-gray-300 rounded focus:outline-yellow-500"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredListings.map((listing) => (
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            key={listing.id} className="p-2 shadow hover:shadow-xl motion-preset-slide-right">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
            <p className="text-gray-700 mb-2">{listing.location}</p>
            <p className="text-green-600 font-semibold mb-2">{`\u20A6${listing.price}`}</p>
            <p className="text-gray-800">{listing.description}</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
               <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Residential;
