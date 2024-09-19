const db = require('../db');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

exports.createUser = async (req, res) => {
    const { username, password, email } = req.body;
    console.log('req', req);
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const [newUser] = await db('Users').insert({
            username,
            password: hashedPassword,
            email
        }).returning('*');

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to create user' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await db('Users').select('*');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await db('Users').where({ id }).first();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch user' });
    }
};
