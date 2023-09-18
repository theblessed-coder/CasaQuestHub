const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const nodemailer = require('nodemailer'); // For sending password reset emails

// Import your User model 
const User = require('../models/user');
const { secretKey } = require('../config/jwt'); // Replace with your secret key

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

// Forgot Password route: Request a password reset
router.post('/forgot-password', async (req, res) => {
  try {
    const { username } = req.body;

    // Find the user by their username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a unique token for password reset (you can use a library like 'uuid')
    const resetToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    // Send an email to the user with a link containing the reset token
    const transporter = nodemailer.createTransport({
      // Configure your email service here
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: user.email, // Assuming you have an 'email' field in your User model
      subject: 'Password Reset',
      text: `Click the following link to reset your password: http://example.com/reset-password/${resetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send password reset email' });
      }
      console.log(`Password reset email sent: ${info.response}`);
      res.status(200).json({ message: 'Password reset email sent' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Forgot Password - Step 2: Handle password reset
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Find the user by their ID
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the new password for the user
    await user.setPassword(password); // Assuming you have a setPassword method in your User model
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout route (JWT doesn't require explicit logout like session-based authentication)
// You can handle token expiration on the client-side

module.exports = router;
