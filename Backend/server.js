const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/api');
const healthRoutes = require('./routes/healthProfile');
const consultationRoutes = require('./routes/consultation');

const app = express(); // ✅ Define `app` first
app.use(express.json()); // Middleware

// ✅ Now safely use app.use(...)
app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/consultations', consultationRoutes);

// MongoDB Connection and Server Start
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// Test route
app.get('/', (req, res) => {
  res.send('🚀 LiveWell API is running');
});

// MongoDB Connection and Server Start
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });
