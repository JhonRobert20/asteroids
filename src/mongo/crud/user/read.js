const User = require('../../models/user');
const { sendResponse } = require('../../../functions/sendResponse');

function findUserByNick(name, res) {
  User.find({ nick : name }, (err, data) => {sendResponse(res, err, data)});
};

function findUserByEmail(email, res) {

  User.find({ email : email }, (err, data) => {sendResponse(res, err, data)});
};

function findAllUsers(res) {
  User.find({}, (err, data) => {sendResponse(res, err, data)});
}
module.exports.findAllUsers = findAllUsers;
module.exports.findUserByNick = findUserByNick;
module.exports.findUserByEmail = findUserByEmail;