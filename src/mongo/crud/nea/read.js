const Nea = require('../../models/nea');
const { sendResponse } = require('../../../functions/sendResponse');

function findNeaByFullName(name, res) {
  console.log(name);
  Nea.find({ full_name : name }, (err, data) => {sendResponse(res, err, data)});
};

function findAllNeas(res) {
  Nea.find({}, (err, data) => {sendResponse(res, err, data)});
}
module.exports.findAllNeas = findAllNeas;
module.exports.findNeaByFullName = findNeaByFullName;
