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
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
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

        <footer>
          <div>
            <ul>
              <li>
                <h2>Quick Links</h2>
              </li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Follow Us</li>
            </ul>
          </div>

          <hr></hr>
          <p>CasaQuestHub &copy; 2023. All rights reserved</p>
        </footer>
      </div>
    );
};

export default SignupPage;