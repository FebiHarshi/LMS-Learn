const mongoose = require('mongoose');

const pathwaySchema = new mongoose.Schema({
  instructorId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coursesRequired: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  skillsAcquired: String,
  duration: String,
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pathway', pathwaySchema);