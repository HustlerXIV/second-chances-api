const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', petsController.createPet);

router.get('/', authMiddleware, petsController.getAllPets);

router.get('/:id', petsController.getPetById);

module.exports = router;
