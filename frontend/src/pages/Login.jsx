import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle login and send data to the backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto 
                    my-20 bg-white rounded 
                    p-8 shadow-lg flex flex-col
                    motion-preset-slide-right">
      <form onSubmit={handleSubmit}>

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
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-slate-500 hover:text-yellow-50 transform hover:translate-y-[-5px] text-black font-semibold w-full p-2 rounded transition duration-500 ease-in-out"
        >
          LOGIN
        </button>
        <p className="text-right pt-2 text-xs text-gray-500">Don't have an account yet? 
          <a href="/Signup"> <u>Sign up</u></a>
        </p>
      </form>
    </div>
  );
};

export default Login;
