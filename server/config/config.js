const mongoose = require('mongoose');

// connect to db
async function connect() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);

        console.log('Database connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect;