const { Router } = require('express');
const express = require('express');
const jsonParse = express.json();
const Controllers = require('./controllers');

const router = Router();

router.get('/user/:id', Controllers.getUser);

router.get('/users/', Controllers.getUsers);

router.post('/user/', jsonParse, Controllers.createUser);

router.delete('/user/:id', Controllers.deleteUser);

router.put('/user/:id', jsonParse, Controllers.updateUser);

module.exports = router;
