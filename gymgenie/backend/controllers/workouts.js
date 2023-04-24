/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/comments`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all workouts
router.get('/workouts', function (req, res) {
    db.Workout.find({})
        .then(workouts => res.json(workouts))
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
router.post('/', (req, res) => {
    db.Workout.create(req.body)
        .then(workouts => res.json(workouts))
})

// finds workout by id
router.get('/:id', function (req, res) {
    db.Workout.findById(req.params.id)
        .then(workout => res.json(workout))
})

// Workout Delete Route 
router.delete('/:id', (req, res) => {
    db.Workout.findByIdAndRemove(req.params.id)
        .then(() => res.send('You deleted workout ' + req.params.id))
})

// Workout Update Route
router.put('/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(workout => res.json(workout))
})

module.exports = router