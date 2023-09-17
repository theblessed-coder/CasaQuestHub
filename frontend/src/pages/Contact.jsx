import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to backend)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-amber-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-amber-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-amber-300 h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-slate-500 hover:text-yellow-50 transform hover:translate-y-[-5px] text-black font-semibold w-full p-2 rounded transition duration-500 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
