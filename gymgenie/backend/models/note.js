const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name: String,
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

module.exports = noteSchema;