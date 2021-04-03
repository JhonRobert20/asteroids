const Nea = require('../../models/nea');
const { sendResponse } = require('../../../functions/sendResponse');

function deleteNeaByName(name, res) {
  const obj = {full_name : name}
  Nea.deleteOne(obj, (err, data) => {sendResponse(res, err, data)});
};

module.exports.deleteNeaByName = deleteNeaByName;