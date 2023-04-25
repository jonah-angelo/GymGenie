const mongoose = require('mongoose');
const noteSchema = require('./note');

const workoutSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    exerciseDate: { type: Date },
    exercises: [{ 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Exercise',
    }],

    notes: [noteSchema],
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
});

module.exports = mongoose.model('Workout', workoutSchema);