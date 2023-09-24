import React from "react";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("./images/her0.jpg")' }}
    >
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-10 text-black">
        <h1 className="text-3xl font-bold mb-4">Welcome to CasaQuestHub</h1>
        <p className="mb-4">
          Discover your dream home with us. Browse through a wide range of
          residential, commercial, and land listings.
        </p>
        <p className="mb-4">
          Whether you're buying, selling, or renting, we're here to help you
          every step of the way.
        </p>
        <p className="mb-8">
          Start your journey with CasaQuestHub today and find the perfect place
          to call home.
        </p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for listings..."
            className="p-2 border border-gray-300 rounded outline-amber-300 mr-2"
          />
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-700">
            Search
          </button>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">Featured</h1>
          <Featured />
        </div>
      </div>
    </div>
  );
};

export default Home;
