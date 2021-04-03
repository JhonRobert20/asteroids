const { app } = require('./src/server/app');
const port = 8000;

// If u don't have any data u can use node src/autoData/server.js, and just use insomnia or postman
// get http://localhost:8000/autoData/users to get all neas by default
// get http://localhost:8000/autoData/neas to get all the users by default

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})