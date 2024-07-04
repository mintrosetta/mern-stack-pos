require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

// routes
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

// https://youtu.be/wdeedpLh_5k?si=L18Vvs48dgxpNevB&t=1953