const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


// Import your User model (assuming you have one)
const User = require('../models/user');
const { secretKey } = require('../config'); // Replace with your secret key

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username });

    await newUser.setPassword(password); // Assuming you have a setPassword method in your User model
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to register user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || !await user.isValidPassword(password)) { // Assuming you have a isValidPassword method in your User model
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout route (JWT doesn't require explicit logout like session-based authentication)
// You can handle token expiration on the client-side

module.exports = router;
