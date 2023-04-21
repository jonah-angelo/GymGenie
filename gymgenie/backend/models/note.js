const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name: String,
    title: String,
    body: String,
    date: { type: Date, default: Date.now }
});

module.exports = noteSchema;