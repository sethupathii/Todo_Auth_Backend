const express = require('express');
const Router = express.Router();
const controls = require('../controller/controller');
const authenticateUser = require('../middleware/autheticateUser');

Router.get('/', authenticateUser, controls.getData);
// Router.get('/:todoId', authenticateUser, controls.getData);
Router.post('/post', authenticateUser, controls.saveData);
Router.put('/update/:id', controls.updateData);
Router.delete('/delete/:id', controls.deleteData);

module.exports = Router;