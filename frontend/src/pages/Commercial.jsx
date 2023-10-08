import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Commercial = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [selectedListing, setSelectedListing] = useState(null);
  
  const openModal = (listing) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
  };

  const commercialListings = [
    {
      id: 1,
      title: "Modern Office Space",
      location: "Lekki Phase 1, Lagos",
      price: "500,000.00 per month",
      description:
        "A spacious modern office space with state-of-the-art facilities.",
      imageUrl: "./images/commercial-01.jpg",
    },

    {
      id: 2,
      title: "Office Building",
      location: "Victoria Island, Lagos",
      price: "800,000.00 per month",
      description: "A multi-story office building with a view of the ocean.",
      imageUrl: "./images/commercial-02.jpg",
    },

    {
      id: 3,
      title: "Commercial Complex",
      location: "Abuja Central Business District",
      price: "150,000.00 per month",
      description:
        "A well-maintained commercial plaza with ample parking space.",
      imageUrl: "./images/commercial-03.jpg",
    },

    {
      id: 4,
      title: "Industrial Warehouse",
      location: "Port Harcourt, Rivers",
      price: "1,200,000.00 per month",
      description: "Spacious industrial warehouse with loading docks.",
      imageUrl: "./images/commercial-04.jpg",
    },

    {
      id: 5,
      title: "Modern Office Space",
      location: "Lekki Phase 1, Lagos",
      price: "500,000.00 per month",
      description:
        "A spacious modern office space with state-of-the-art facilities.",
      imageUrl: "./images/commercial-01.jpg",
    },

    {
      id: 6,
      title: "Office Building",
      location: "Victoria Island, Lagos",
      price: "800,000.00 per month",
      description: "A multi-story office building with a view of the ocean.",
      imageUrl: "./images/commercial-02.jpg",
    },

    {
      id: 7,
      title: "Commercial Complex",
      location: "Abuja Central Business District",
      price: "150,000.00 per month",
      description:
        "A well-maintained commercial plaza with ample parking space.",
      imageUrl: "./images/commercial-03.jpg",
    },

    {
      id: 8,
      title: "Industrial Warehouse",
      location: "Port Harcourt, Rivers",
      price: "1,200,000.00 per month",
      description: "Spacious industrial warehouse with loading docks.",
      imageUrl: "./images/commercial-04.jpg",
    },

    {
      id: 9,
      title: "Modern Office Space",
      location: "Lekki Phase 1, Lagos",
      price: "500,000.00 per month",
      description:
        "A spacious modern office space with state-of-the-art facilities.",
      imageUrl: "./images/commercial-01.jpg",
    },
  ];

  const filteredListings = commercialListings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.price.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Commercial Listings</h1>
      <div className="flex justify-end mb-4">
        <input
          className="p-2 border border-gray-300 rounded focus:outline-yellow-500"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <div key={listing.id}>
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
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 mr-2"
                onClick={() => openModal(listing)}
              >
                View Details
              </button>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedListing && (
        <Modal listing={selectedListing} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Commercial;
