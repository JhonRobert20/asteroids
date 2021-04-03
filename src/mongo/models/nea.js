const mongoose = require('mongoose');

const neaSchema = mongoose.Schema({
  full_name: { type: String, required: true, unique: true},
  a  :  { type: Number, required: true, unique: false},
  e  :  { type: Number, required: true, unique: false},
  i  :  { type: Number, required: true, unique: false},
  om : { type: Number, required: true, unique: false},
  w  :  { type: Number, required: true, unique: false},
  ma : { type: Number, required: true, unique: false}
});

module.exports = mongoose.model('Nea', neaSchema);