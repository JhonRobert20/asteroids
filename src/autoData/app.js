const { json } = require('body-parser');
const express = require('express');
const { connect } = require('../mongo/connection');

const { addListNeas } = require('../mongo/crud/nea/addList');
const { addListUsers } = require('../mongo/crud/user/addList');

const filePathNeasJson = 'src/jsons/asteroids.json';
const filePathUsersJson = 'src/jsons/users.json';

const app = express();
app.use(json());
connect();


app.route('/autoData/neas')
.get((req, res) => {addListNeas(filePathNeasJson, res)})

app.route('/autoData/users')
.get((req, res) => {addListUsers(filePathUsersJson, res)})


module.exports.app = app;