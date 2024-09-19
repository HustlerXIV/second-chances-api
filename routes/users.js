const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');

router.post('/', usersController.createUser);

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getUserById);

module.exports = router;
