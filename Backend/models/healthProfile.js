const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthProfileSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  height: { type: Number }, // in cm

  weight: { type: Number }, // in kg

  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },

  lastMenstrualDate: { type: Date },

  cycleLength: { type: Number }, // in days

  contraceptiveUse: { 
    type: String, 
    enum: ['none', 'pill', 'iud', 'implant', 'condoms', 'other'] 
  },

  allergies: [{ type: String }]
  
}, { timestamps: true });

module.exports = mongoose.model('HealthProfile', healthProfileSchema);