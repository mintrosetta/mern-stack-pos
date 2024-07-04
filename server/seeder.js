const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connection = require('./config/config');
const ItemModel = require('./models/ItemModel');
const items = require('./utils/data');

dotenv.config();
connection();

async function importData() {
    try {
        await ItemModel.deleteMany();
        const itemStored = await ItemModel.insertMany(items);

        console.log('Items added successful');
        process.exit(1);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

importData();