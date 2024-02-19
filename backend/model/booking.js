const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },
  date:{type:Date}
  });
  
  module.exports = mongoose.model('Booking', bookingSchema);