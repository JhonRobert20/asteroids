const csvtojson = require('csvtojson');
const fs = require('fs');

function convertToJsonCsvFile(fileCsv, fileJson) {
  try {
    csvtojson()
      .fromFile(fileCsv)
      .then((json) => {
        fs.writeFileSync(fileJson, JSON.stringify(json, null, 2), "utf-8")
      })
    return true;
  } catch (err){
    console.log(err.message);
    return false;

  }
};

module.exports.convertToJsonCsvFile = convertToJsonCsvFile;
