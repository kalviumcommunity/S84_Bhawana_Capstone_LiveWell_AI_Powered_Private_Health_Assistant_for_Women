const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api');
const healthRoutes = require('./routes/healthProfile');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect routes
app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);

// Connect MongoDB and then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
      console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
