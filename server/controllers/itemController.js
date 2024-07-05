const itemModel = require('../models/ItemModel');

async function getItems(req, res) {
    try {
        const items = await itemModel.find();
        console.log(items)

        return res.status(200).json({
            status: true,
            message: 'Successful',
            data: items
        });
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            status: false,
            message: err.message,
            data: null
        });
    }
}

async function createItem(req, res) {
    try {
        const newItem = new itemModel(req.body);
        await newItem.save();

        return res.status(201).json({
            status: true,
            message: 'Created',
            data: null
        })
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            status: false,
            message: err.message,
            data: null
        });
    }
}

module.exports = {
    getItems,
    createItem
}