const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, petsController.createPet);

router.get('/', authMiddleware, petsController.getAllPets);

router.get('/:id', petsController.getPetById);

router.put('/:id', authMiddleware, petsController.editPetById);

router.delete('/:id', authMiddleware, petsController.deletePetById);

module.exports = router;
