import React from "react";

const Featured = () => {
  const featuredListings = [
    {
      id: 1,
      title: "Tranquil Estate in Port Harcourt",
      location: "GRA Phase 3, Port Harcourt",
      price: "2,000,000.00",
      description:
        "Experience sophistication in this sleek penthouse, featuring high-end finishes and panoramic city views.",
      imageUrl: "./images/residential-03.jpg",
    },

    {
      id: 2,
      title: "Commercial Complex",
      location: "Abuja Central Business District",
      price: "150,000.00 per month",
      description:
        "A well-maintained commercial plaza with ample parking space.",
      imageUrl: "./images/commercial-03.jpg",
    },

    {
      id: 5,
      title: "Industrial Land",
      location: "Port Harcourt, Rivers",
      price: "3,800,000.00",
      description:
        "A suitable land for industrial purposes with good access to transportation.",
      imageUrl: "./images/land-05.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredListings.map((listing) => (
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
  );
};

export default Featured;
