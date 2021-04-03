const { json } = require('body-parser');
const express = require('express');
const { connect } = require('../mongo/connection');

const { findUserByNick, findAllUsers } = require('../mongo/crud/user/read')
const { updateUserByNick } = require('../mongo/crud/user/update')
const { deleteUserByNick } = require('../mongo/crud/user/delete')
const { createUser } = require('../mongo/crud/user/create');

const { createNea } = require('../mongo/crud/nea/create')
const { updateNeaByName } = require('../mongo/crud/nea/update')
const { deleteNeaByName } = require('../mongo/crud/nea/delete')
const { findAllNeas, findNeaByFullName } = require('../mongo/crud/nea/read')

const app = express();
app.use(json());
connect();

app.route('/users')
.get((req, res) => findAllUsers(res))
.post((req,res) => createUser(req.body, res));

app.route('/users/:nick')
.get((req, res) => findUserByNick(req.params.nick, res))
.put((req, res) => updateUserByNick(req.params.nick, req.body, res))
.delete((req, res) => deleteUserByNick(req.params.nick, res))

app.route('/neas')
.get((req, res) => findAllNeas(res))
.post((req, res) => createNea(req.body, res));

app.route('/neas/:full_name')
.get((req, res) => findNeaByFullName(req.params.full_name, res))
.put((req, res) => updateNeaByName(req.params.full_name, req.body, res))
.delete((req, res) => deleteNeaByName(req.params.full_name, res))



module.exports.app = app;