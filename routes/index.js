const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const petsRoutes = require('./pets');

router.use('/users', usersRoutes);
router.use('/pets', petsRoutes);

module.exports = router;
