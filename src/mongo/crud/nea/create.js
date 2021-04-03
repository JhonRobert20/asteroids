const Nea = require('../../models/nea');
const { objectToModel } = require('../../../functions/objectToModel');
const { sendResponse } = require('../../../functions/sendResponse');

function createNea(data, res) {
  var newObject = objectToModel(data);
  Nea.create(newObject, (err, data) => {sendResponse(res, err, data)});
}

module.exports.createNea = createNea;