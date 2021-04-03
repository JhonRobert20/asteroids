const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name     : { type: String, required: true, unique: false },
  nick     : { type: String, required: true, unique: true  },
  password : { type: String, required: true, unique: false },
  email    : { type: String, required: false, unique: true }
});

module.exports = mongoose.model('User', userSchema);