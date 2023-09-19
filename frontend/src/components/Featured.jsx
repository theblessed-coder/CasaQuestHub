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
        <div key={listing.id}>{/* Display the featured listing */}</div>
      ))}
    </div>
  );
};

export default Featured;
