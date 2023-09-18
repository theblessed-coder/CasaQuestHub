const User = require('../models/user'); // Import your User model here

// Create a new user
async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'CasaQuestHub user created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
}

// Get a user by ID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
}

// Update user information
async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    
    const user = await User.findByIdAndUpdate(userId, { username, email, password }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};

