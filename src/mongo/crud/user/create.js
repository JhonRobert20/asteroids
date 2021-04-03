const User = require('../../models/user');
const { objectToModel } = require('../../../functions/objectToModel');
const { sendResponse } = require('../../../functions/sendResponse');

function createUser(data, res) {
  var newObject = objectToModel(data);
  User.create(newObject, (err, data) => {sendResponse(res, err, data)})
}


module.exports.createUser = createUser;