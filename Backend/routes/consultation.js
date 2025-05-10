const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

// POST (Write)
router.post("/", async (req, res) => {
  try {
    const { patientId, doctorId, date, reason } = req.body;
    
    if (!patientId || !doctorId || !date) {
      return res.status(400).json({ error: "Patient ID, doctor ID, and date are required" });
    }
    
    const newConsultation = new Consultation(req.body);
    await newConsultation.save();
    res.status(201).json(newConsultation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET (Read)
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find();
    res.status(200).json(consultations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
