const mongoose = require('mongoose');
const { Schema } = mongoose;

const consultationSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  question: { type: String, required: true },

  aiResponse: { type: String },

  isAnonymous: { type: Boolean, default: false },
  
  tags: [{ type: String, enum: ['contraception', 'menstruation', 'pregnancy', 'breast-health'] }]
}, { timestamps: true });

module.exports = mongoose.model('Consultation', consultationSchema);