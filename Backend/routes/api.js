const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as needed

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
