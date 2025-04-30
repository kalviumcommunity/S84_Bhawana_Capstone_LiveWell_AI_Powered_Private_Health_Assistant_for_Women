const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({

  name: { type: String, required: true },

  email: { type: String, unique: true, required: true, lowercase: true },

  password: { type: String, required: true }, // Encrypted via bcrypt

  age: { type: Number },

  gender: { type: String, enum: ['female', 'non-binary', 'other'], required: true },

  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // for RBAC

  createdAt: { type: Date, default: Date.now },

}, { timestamps: true });

module.exports = model('User', userSchema);
