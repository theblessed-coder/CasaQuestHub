import React, { useState } from "react";

const Commercial = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const commercialListings = [
    {
      id: 1,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 2,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 3,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 4,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 5,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 6,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 7,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 8,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
    },

    {
      id: 9,
      title: "",
      location: "",
      price: "",
      description: "",
      imageUrl: "",
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
      <h1 className="text-2xl font-bold mb-4 ">Commercial Listings</h1>
      <div className="flex justify-end mb-4">
        <input 
            className="p-2 border border-gray-300 rounded focus:outline-yellow-500"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
        />
      </div>

      <div className="">

      </div>
    </div>
  );
};

export default Commercial;
