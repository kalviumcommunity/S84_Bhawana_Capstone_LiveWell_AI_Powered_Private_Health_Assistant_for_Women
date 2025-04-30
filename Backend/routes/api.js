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

router.post('/users', async (req, res) => {
    try {
      const { name, email, password, age, gender, role } = req.body;
      if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email and password are required' });
           }
  
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

  router.put('/users/:id', async (req, res) => {
    try {
      const { name, email, password, age, gender, role } = req.body;
      const { id } = req.params;
  
      // Input validation can be similar to POST, with checks for missing fields or incorrect values
      if (!name && !email && !password && !age && !gender && !role) {
        return res.status(400).json({ message: 'At least one field is required to update' });
      }
  
      // Hash password only if it's being updated
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
      }
  
      // Update user in the database
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Exclude password from response
      const { password: _, ...userWithoutPassword } = updatedUser.toObject();
      res.status(200).json(userWithoutPassword);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

module.exports = router;
