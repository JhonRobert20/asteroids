function objectToModel(object) {
  try {
    if (typeof object === 'object') {
      var keys = Object.keys(object);
      var newObject = {};
      keys.forEach( key => {
        newObject[key] = object[key];
      });
      return newObject;
    }
    return {};
  } catch (err) {
    console.log(err.message);
    return {};
  }
}


module.exports.objectToModel = objectToModel;