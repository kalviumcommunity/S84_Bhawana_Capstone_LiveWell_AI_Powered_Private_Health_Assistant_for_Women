const express = require('express');
const router = express.Router();
const HealthProfile = require('../models/healthProfile');

// Create/Update health profile
router.post('/profiles', async (req, res) => {
 db-read-write-consultation
    try {
      const { userId, height, weight, bloodType, lastMenstrualDate, cycleLength, contraceptiveUse, allergies } = req.body;
      const profileData = { userId, height, weight, bloodType, lastMenstrualDate, cycleLength, contraceptiveUse, allergies };
      
      const profile = await HealthProfile.findOneAndUpdate(
        { userId: userId },
        profileData,
        { new: true, upsert: true }
      );
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Get profile by user ID
router.get('/profiles/:userId', async (req, res) => {

  try {
    const { userId, height, weight, bloodType, lastMenstrualDate, cycleLength, contraceptiveUse, allergies } = req.body;
    const profileData = { userId, height, weight, bloodType, lastMenstrualDate, cycleLength, contraceptiveUse, allergies };
    
    const profile = await HealthProfile.findOneAndUpdate(
      { userId: userId },
      profileData,
      { new: true, upsert: true }
    );
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  // Get profile by user ID
  router.get('/profiles/:userId', async (req, res) => {
 main
    try {
      const profile = await HealthProfile.findOne({ userId: req.params.userId });
      if (!profile) {
        return res.status(404).json({ message: 'Health profile not found' });
      }
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
 db-read-write-consultation

    res.status(500).json({ message: err.message });
  }
});
 main

module.exports = router;