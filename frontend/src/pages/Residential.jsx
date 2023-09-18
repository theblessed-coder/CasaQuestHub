import React, { useState } from "react";

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
      price: "$300,000",
      description: "A spacious family home with a large backyard and modern amenities.",
      imageUrl: "./images/residential-01.png",
    },

    {
      id: 2,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 3,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 4,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 5,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 6,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 7,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 8,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
    },

    {
      id: 9,
      title: "Cozy Townhouse",
      location: "Ada george, Rivers",
      price: "$200,000",
      description: "A charming townhouse with easy access to local amenities.",
      imageUrl: "./images/residential-02.png",
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
            <p className="text-green-600 font-semibold mb-2">{listing.price}</p>
            <p className="text-gray-800">{listing.description}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 mr-2">
                View Details
              </button>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Residential;
