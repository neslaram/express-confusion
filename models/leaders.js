const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  },
  designation: {
    type: String,
    default: ''
  },
  abbr: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;
