const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect routes
app.use('/api', userRoutes); 

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(3000, () => console.log('Server is running')))
  .catch(err => console.error(err));
