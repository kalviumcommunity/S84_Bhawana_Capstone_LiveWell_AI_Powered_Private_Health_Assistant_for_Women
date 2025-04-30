const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as needed
const bcrypt = require('bcryptjs');

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create a new user
router.post('/users', async (req, res) => {
    try {
      const { name, email, password, age, gender, role } = req.body;
  
      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create and save new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        age,
        gender,
        role,
      });
  
      await newUser.save();
  
      // Exclude password from response
      const { password: _, ...userWithoutPassword } = newUser.toObject();
  
      res.status(201).json(userWithoutPassword);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
