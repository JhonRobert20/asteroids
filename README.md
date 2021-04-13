# Asteroids, Jhon Robert

npm install;
If you don't have any data I create a auto fill, use:
- node src/autoData/server.js in node
- http://localhost:8000/autoData/neas in postman
- http://localhost:8000/autoData/users in postman

node index.js to run the real server;
this are the routes
route('/users')
- .get & post

route('/users/:nick')
- .get, put & delete

app.route('/neas')
- .get & .post

app.route('/neas/:full_name')
- get, put & delete

If you want to make any change in the path of mongo database go to src/mongo/connection.js;

# test
The test in node was maked with jest. Just use npm test.

Ty for your time
