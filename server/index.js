require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connection = require('./config/config');

const app = express();

// middlewares
connection();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/items', require('./routes/itemRoute'));
app.get('', (req, res) => {
    return res.json({
        status: true,
        message: 'Successful',
        data: null
    });
});

// listening
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// https://youtu.be/wdeedpLh_5k?si=3kx3uRUWwz2Rs33T&t=2949