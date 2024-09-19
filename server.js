const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const routes = require('./routes');

const app = express();
const port = 3001;

const pool = new Pool({
    connectionString: 'postgresql://SecondChancesDB_owner:X1kzNo9qtayD@ep-floral-flower-a19s5ptu.ap-southeast-1.aws.neon.tech/SecondChancesDB?sslmode=require'
});

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/test', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
