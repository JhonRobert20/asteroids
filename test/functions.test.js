const { convertToJsonCsvFile } = require('../src/functions/toJson')
const { sendResponse } = require('../src/functions/sendResponse')
const { objectToModel } = require('../src/functions/objectToModel');

describe("objectToModel", () => {
  test("Should return {} for typeof diferent than object", () => {
    expect(objectToModel(false)).toStrictEqual({});
  });

  test("Should return a length greater than 0", () => {
    const data = [{ajd:"a"}, {ad: "a"}];
    const lengthData = Object.keys(objectToModel(data)).length;
    expect(lengthData).not.toBe(0);
  });
});

// don't try it
describe.skip("convertcsvToJson", () => {
  const filePathJson = "tothis.json"
  const filePathCsv = "noExists.csv";
  const goodFileCsv = "yourFile.csv"

  test("Should return false if file csv don't exists or not is a csv file", () => {
    expect(convertToJsonCsvFile(false, filePathCsv)).toBe(false);
  });

  test("Should return true if you use a good csv file", () => {
    expect(convertToJsonCsvFile(goodFileCsv, filePathJson)).toBe(true);
  })
})