const express = require('express');
const router = express.Router();
const HealthProfile = require('../models/healthProfile');

// Create/Update health profile
router.post('/profiles', async (req, res) => {
  try {
    const profile = await HealthProfile.findOneAndUpdate(
      { userId: req.body.userId },
      req.body,
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
    const profile = await HealthProfile.findOne({ userId: req.params.userId });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;