const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  dob: { type: Date },
  bio: { type: String },
});

module.exports = mongoose.model('Guest', guestSchema);