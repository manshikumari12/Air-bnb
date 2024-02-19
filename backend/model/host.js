
const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, default: true },
  location: { type: String },
  propertyType: { type: String, enum: ['Apartment', 'House', 'Unique Homes'] },
  about: { type: String },
  hostingSince: { type: Date },
});

module.exports = mongoose.model('Host', hostSchema);