const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users } = require('../models/user'); // Replace with your actual User model
require('../models/property'); // Replace with your actual User model

// Signup
exports.signup = (req, res) => {
  const { username, password } = req.body;
  
  // Check if the user already exists
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Hash the password and store the user
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }
    
    const user = { username, password: hash };
    users.push(user);
    
    res.status(201).json({ message: 'User registered successfully' });
  });
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;
  
  // Find the user
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  
  // Compare the password
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    // Create a JWT token
    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
    
    res.status(200).json({ message: 'Login successful', token });
  });
};
