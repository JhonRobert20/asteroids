const fs = require('fs');
const Nea = require('../../models/nea');
const { sendResponse } = require('../../../functions/sendResponse');

function addListNeas(fileJson, res) {
  var neas = JSON.parse(fs.readFileSync(fileJson));
  Nea.insertMany(neas, (err, data) => sendResponse(res, err, data))
}


module.exports.addListNeas = addListNeas;