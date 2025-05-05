const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  image: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
