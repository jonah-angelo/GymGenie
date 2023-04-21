const mongoose = require('mongoose');
const noteSchema = require('./note');

const workoutSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    // exercisesId: { type: Number, require: true},
    notes: [noteSchema]
});

module.exports = mongoose.model('Workout', workoutSchema);