const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SALT_ROUNDS = 10;
const TABLE_NAME = 'Users';

exports.createUser = async (req, res) => {
    const { username, password, email, fullname } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const [newUser] = await db(TABLE_NAME).insert({
            username,
            password: hashedPassword,
            email,
            fullname
        }).returning('*');

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to create user' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await db(TABLE_NAME).select('*');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await db(TABLE_NAME).where({ id }).first();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch user' });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db('Users').where({ username }).first();
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const now = new Date();
        const expiresAt = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour later

        await db('Tokens').insert({
            user_id: user.id,
            token: token,
            expires_at: expiresAt,
            created_at: now
        });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to login' });
    }
};
