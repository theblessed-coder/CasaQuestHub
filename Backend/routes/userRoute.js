const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming your schema file is in the 'models' directory

// Route to create a new user
router.post('/register', async (req, res) => {
  try {
    // Create a new user based on the request body
    const newUser = new User(req.body);
    
    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a specific user by ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a specific user by ID
router.patch('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Update the user by ID
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a specific user by ID
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the user by ID
    const deletedUser = await User.findByIdAndRemove(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
