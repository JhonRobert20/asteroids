const User = require('../../models/user');
const { sendResponse } = require('../../../functions/sendResponse');

function updateUserByNick(nick, object, res) {
  User.updateOne({"nick" : nick}, {$set : object}, (err, data) => {sendResponse(res, err, data)})
}

function updateUserByEmail(email, object, res) {
  
  User.updateOne({"email" : email}, {$set : object}, (err, data) => {sendResponse(res, err, data)})
}

module.exports.updateUserByEmail = updateUserByEmail;
module.exports.updateUserByNick = updateUserByNick;