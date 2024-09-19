const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');

router.post('/', usersController.createUser);

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getUserById);

router.post('/login', usersController.loginUser);

module.exports = router;
