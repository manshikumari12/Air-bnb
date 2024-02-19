const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'Host', required: true },
   city:{type:String}
  });
  
  module.exports = mongoose.model('Property', propertySchema);