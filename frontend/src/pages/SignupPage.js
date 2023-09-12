import { useState } from "react";

const SignupPage = () => {
    const [formData, setFormData] = useState({email: '', password: ''});

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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;