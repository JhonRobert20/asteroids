const User= require('../../models/user');
const { sendResponse } = require('../../../functions/sendResponse');

function deleteUserByNick(nick, res) {
  const obj = {nick : nick}
  User.deleteOne(obj, (err, data) => {sendResponse(res, err, data)});
};

function deleteUserByEmail(email, res) {
  const obj = {email : email}
  User.deleteOne(obj, (err, data) => {sendResponse(res, err, data)});
};

module.exports.deleteUserByNick = deleteUserByNick;
module.exports.deleteUserByEmail = deleteUserByEmail;