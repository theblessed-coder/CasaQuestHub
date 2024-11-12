import React, { useState } from "react";
import {Link} from "react-router-dom";

const Land = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const landListings = [
    {
      id: 1,
      title: "Prime Land Parcel",
      location: "Ibeju-Lekki, Lagos",
      price: "2,500,000.00",
      description:
        "A strategically located land parcel in the rapidly developing Ibeju-Lekki area.",
      imageUrl: "./images/land-01.jpg",
    },
    {
      id: 2,
      title: "Residential Plot",
      location: "Gwarinpa, Abuja",
      price: "1,800,000.00",
      description:
        "A spacious residential plot in the serene Gwarinpa district of Abuja.",
      imageUrl: "./images/land-02.jpg",
    },
    {
      id: 3,
      title: "Commercial Land",
      location: "Ikorodu, Lagos",
      price: "3,200,000.00",
      description:
        "A large parcel of land suitable for commercial development in Ikorodu.",
      imageUrl: "./images/land-03.jpg",
    },
    {
      id: 4,
      title: "Investment Opportunity",
      location: "Kubwa, Abuja",
      price: "1,500,000.00",
      description:
        "An affordable land parcel with high potential for appreciation in value.",
      imageUrl: "./images/land-04.jpg",
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
    
    {
      id: 6,
      title: "Residential Land",
      location: "Gwagwalada, Abuja",
      price: "1,300,000.00",
      description:
        "A suitable plot for building your dream home in the tranquil Gwagwalada district.",
      imageUrl: "./images/land-01.jpg",
    },
    {
      id: 7,
      title: "Agricultural Land",
      location: "Kano, Kano",
      price: "2,300,000.00",
      description:
        "A fertile land suitable for agricultural activities near the city of Kano.",
      imageUrl: "./images/land-02.jpg",
    },
    
    {
      id: 8,
      title: "Investment Land Parcel",
      location: "Ogun State",
      price: "2,700,000.00",
      description:
        "An investment-worthy land parcel in the promising Ogun State region.",
      imageUrl: "./images/land-03.jpg",
    },

    {
      id: 9,
      title: "Commercial Plot",
      location: "Awka, Anambra",
      price: "3,500,000.00",
      description:
        "A strategically located plot for commercial ventures in Awka.",
      imageUrl: "./images/land-04.jpg",
    },

  ];


  const filteredListings = landListings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.price.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Land Listings</h1>
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
          <div key={listing.id} className="p-2 shadow hover:shadow-xl transition delay-100 animate-[fadeInDiag_0.3s_ease]">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Land;
