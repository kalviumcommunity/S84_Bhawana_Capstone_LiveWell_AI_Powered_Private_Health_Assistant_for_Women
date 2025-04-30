const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect routes
app.use('/api', userRoutes); 

// Use PORT from environment
const PORT = process.env.PORT || 3000;

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch(err => console.error(err));
