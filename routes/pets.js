const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, petsController.createPet);

router.get("/", petsController.getAllPets);

router.get("/all-my-pets", authMiddleware, petsController.getAllMyPets);

router.get(
  "/all-my-adopted-pets",
  authMiddleware,
  petsController.getAllAdoptedPets
);

router.get("/:id", petsController.getPetById);

router.put("/:id", authMiddleware, petsController.editPetById);

router.put("/adopt/:id", authMiddleware, petsController.adoptPet);

router.delete("/:id", authMiddleware, petsController.deletePetById);

module.exports = router;
