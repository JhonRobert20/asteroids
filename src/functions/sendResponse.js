function sendResponse(res, err, data) {
  if (err) {
    res.json({
      succes: false,
      message: err
    })
  } else if(!data) {
    res.json({
      succes: false,
      message: "Not found"
    })
  } else {
    if ( data.length === 0) {
      res.json({
        succes: false,
        message: "Not Found"
      })
    } else {
      res.json({
        succes: true,
        data: data
      })
    }
  }
}

module.exports.sendResponse = sendResponse;