import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add code to handle signup and send data to the backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto my-5 bg-white rounded p-8 shadow-lg flex flex-col">
    
        <form
          className="transition duration-1000 ease-in-out"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block font-semibold mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-amber-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded  outline-amber-300"
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
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded  outline-amber-300"
              required
            />
          </div>
          <p className="text-center pb-2">
            By clicking Register Now, you agree to CasaQuestHub's <br />
            Privacy Policy, Terms and Conditions.
          </p>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-slate-500 hover:text-yellow-50 transform hover:translate-y-[-5px] text-black font-semibold w-full p-2 rounded transition duration-500 ease-in-out"
          >
            REGISTER NOW
          </button>
          <p className="text-right pt-2">Already have an account? </p>
        </form>
      
    </div>
  );
};

export default SignupPage;
