import React from "react";
import Featured from "../components/Featured";
import NewListing from "../components/NewListing";
import { TopAgents } from "../components/TopAgents";

const Home = () => {
  return (
    <div
      className="bg-auto bg-no-repeat"
      style={{ backgroundImage: 'url("./images/hero-image.jpg")' }}
    >
      <div className="w-full font-light mx-auto px-10 py-12 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 text-white transition delay-200 animate-[fade_0.7s_ease-in_backwards]">
        <h1 className="text-3xl static mt-8 mb-2 font-medium">
          Welcome to CasaQuestHub
        </h1>
        <p className="text-lg py-4 max-w-4xl">
          Browse through a wide range of residential, commercial, and land listings.
          Whether you're buying, selling, or renting, we're here to help you 
          every step of the way. Start your journey with CasaQuestHub today
          and find the perfect place to call home.
        </p>
        {/*
        <div className="flex items-center mt-4 mb-4">
          <input
            type="text"
            placeholder="Search for listings..."
            className="p-2 border border-gray-300 rounded outline-amber-300 mr-2"
          />
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-700">
            Search
          </button>
        </div> */}
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-8">
          <NewListing />
          <h1 className="text-2xl font-bold mb-4">Featured</h1>
          <hr className="mb-4"/>
          <Featured />
          <TopAgents />
        </div>
      </div>
    </div>
  );
};

export default Home;
