import React from "react";
import Reviews from "../components/Reviews";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mt-6 mb-2 px-6">About CasaQuestHub</h1>
      <hr className="mb-4 mx-6"/>
      <p className="mb-4 px-6">
        Casa Quest Hub is a user-friendly and
        feature-rich real estate website aimed at simplifying the process of
        buying, selling, and renting properties. We offer a comprehensive
        database of property listings, allowing users to search based on various
        criteria such as location, price, property type, and more.
      </p>
      <p className="mb-4 px-6">
        It will also incorporate interactive maps and contact information to
        facilitate communication between buyers, sellers, and real estate
        agents. Additionally, the website will prioritize responsive design to
        ensure a seamless and safe user experience.
      </p>
      <Reviews />
    </div>
  );
}

export default About;
