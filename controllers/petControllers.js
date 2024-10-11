const db = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const TABLE_NAME = "Pets";

exports.createPet = async (req, res) => {
  const { name, species, breed, age, description, photo_url, pet_status } =
    req.body;

  try {
    const [newPet] = await db(TABLE_NAME)
      .insert({
        name,
        user_id: req.userId,
        species,
        breed,
        age,
        description,
        photo_url,
        pet_status,
      })
      .returning("*");

    res.status(201).json(newPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create pet" });
  }
};

exports.getAllPets = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sort_by = "pet_status",
    order = "asc",
    name,
    species,
    breed,
    age,
    pet_status,
  } = req.query;
  const offset = (page - 1) * limit;

  try {
    let countQuery = db(TABLE_NAME);

    if (name) {
      countQuery = countQuery.where("name", "ILIKE", `%${name}%`);
    }

    if (species) {
      countQuery = countQuery.where("species", "ILIKE", `%${species}%`);
    }

    if (breed) {
      countQuery = countQuery.where("breed", "ILIKE", `%${breed}%`);
    }

    if (age) {
      countQuery = countQuery.where("age", "ILIKE", `%${age}%`);
    }

    if (pet_status) {
      countQuery = countQuery.where("pet_status", "ILIKE", `%${pet_status}%`);
    }

    const totalPetsResult = await countQuery.count("id as count").first();
    const totalPets = totalPetsResult.count;

    let query = db(TABLE_NAME).select("*");

    if (name) {
      query = query.where("name", "ILIKE", `%${name}%`);
    }

    if (species) {
      query = query.where("species", "ILIKE", `%${species}%`);
    }

    if (breed) {
      query = query.where("breed", "ILIKE", `%${breed}%`);
    }

    if (age) {
      query = query.where("age", "ILIKE", `%${age}%`);
    }

    if (pet_status) {
      query = query.where("pet_status", "ILIKE", `%${pet_status}%`);
    }

    const pets = await query
      .orderBy(sort_by, order)
      .limit(limit)
      .offset(offset);

    res.status(200).json({
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalPets / limit),
      totalPets: totalPets,
      pets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch pets" });
  }
};

exports.getPetById = async (req, res) => {
  const { id } = req.params;

  try {
    const pet = await db(TABLE_NAME).where({ id }).first();

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch pet" });
  }
};

exports.editPetById = async (req, res) => {
  const { id } = req.params;
  const { name, age, species, breed, description, petStatus, photo_url } =
    req.body;

  try {
    const userIdFromToken = req.userId;
    const pet = await db(TABLE_NAME).where({ id }).first();

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    if (pet.user_id !== userIdFromToken) {
      return res
        .status(403)
        .json({ error: "You are not authorized to edit this pet" });
    }

    const updates = Object.entries({
      name,
      age,
      species,
      breed,
      description,
      pet_status: petStatus,
      photo_url,
    }).reduce((acc, [key, value]) => {
      if (value !== undefined) acc[key] = value;
      return acc;
    }, {});

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No fields to update" });
    }

    await db(TABLE_NAME)
      .where({ id })
      .update({
        ...updates,
        updated_at: new Date(),
      });

    res.status(200).json({ message: "Pet updated successfully" });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    console.error(error);
    res.status(500).json({ error: "Unable to edit pet" });
  }
};

exports.deletePetById = async (req, res) => {
  const { id } = req.params;

  try {
    const userIdFromToken = req.userId;

    const pet = await db(TABLE_NAME).where({ id }).first();

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    if (pet.user_id !== userIdFromToken) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this pet" });
    }

    await db(TABLE_NAME).where({ id }).del();

    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    console.error(error);
    res.status(500).json({ error: "Unable to delete pet" });
  }
};
