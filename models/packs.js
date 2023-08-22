const mongoose = require('../db/connection');

const packSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    instructorLed: Boolean,
    selfLed: Boolean,
    price: Number
});

const Pack = new mongoose.model("Pack", packSchema);

module.exports = Pack;