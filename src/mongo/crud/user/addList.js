const fs = require('fs');
const User = require('../../models/user');
const { sendResponse } = require('../../../functions/sendResponse');

function addListUsers(fileJson, res) {
  var neas = JSON.parse(fs.readFileSync(fileJson));
  User.insertMany(neas, (err, data) => {sendResponse(res, err, data)})
}

module.exports.addListUsers = addListUsers;