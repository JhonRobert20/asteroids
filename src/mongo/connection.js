const mongoose = require('mongoose');

const options = {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connect = () => {
  mongoose.connect("mongodb://localhost/asteroids", options).then(()=>{
      console.log('MongoDB is connected')
  }).catch(err=>{
      console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
  })
};
module.exports.connect = connect;