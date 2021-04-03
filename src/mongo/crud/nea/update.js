const Nea = require('../../models/nea');
const { sendResponse } = require('../../../functions/sendResponse');

function updateNeaByName(name, object, res) {
  Nea.updateOne({"full_name" : name}, {$set : object}, (err, data) => {sendResponse(res, err, data)})
}

module.exports.updateNeaByName = updateNeaByName;