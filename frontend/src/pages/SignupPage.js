import { useState } from "react";

const SignupPage = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: ''});

    const handleChange = (e) =>  {
        const { name, value } = e.target;
       setFormData({ ...formData, [name]: value}); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add code to handle signup and send data to the backend
        console.log('Form submitted:', formData)
    };


    return (
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            By clicking Register Now, you agree to CasaQuestHub's Privacy
            Policy, Terms and Conditions.
          </p>
          <button type="submit">REGISTER NOW</button>
          <p>Already have an account? </p>
        </form>
      </div>
    );
};

export default SignupPage;