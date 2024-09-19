const db = require('../db');

const TABLE_NAME = 'Pets';

exports.createPet = async (req, res) => {
    const { name, species, breed, age, description, photo_url, status } = req.body;

    try {
        const [newPet] = await db(TABLE_NAME).insert({
            name,
            species,
            breed,
            age,
            description,
            photo_url,
            status
        }).returning('*');

        res.status(201).json(newPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to create pet' });
    }
};

exports.getAllPets = async (req, res) => {
    try {
        const pets = await db(TABLE_NAME).select('*');
        res.status(200).json(pets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch pets' });
    }
};

exports.getPetById = async (req, res) => {
    const { id } = req.params;

    try {
        const pet = await db(TABLE_NAME).where({ id }).first();

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }

        res.status(200).json(pet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch pet' });
    }
};
