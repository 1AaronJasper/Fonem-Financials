const mongoose = require('../db/connection');

const interestSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    goals: String,
});

const Interest = new mongoose.model("Interest", interestSchema);

module.exports = Interest;