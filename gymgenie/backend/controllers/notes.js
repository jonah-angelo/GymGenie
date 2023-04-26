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
// Index Route (GET/Read): Will display all comments
router.get('/', (req, res) => {
    db.Exercise.find({}, { notes: true, _id: false })
        .then(exercises => {
            // format query results to appear in one array, 
            // rather than an array of objects containing arrays 
            const flatList = []
            for (let exercise of exercises) {
                flatList.push(...exercise.notes)
            }
            res.json(flatList)
        })
});

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new comment document using the form data, 
// and redirects the user to the new comment's show page
router.post('/create/:exerciseId', (req, res) => {
    db.Exercise.findByIdAndUpdate(
        req.params.exerciseId,
        { $push: { notes: req.body } },
        { new: true }
        )
        .then(notes => res.json(notes))
})

// Show Route (GET/Read): Will display an individual comment document
// using the URL parameter (which is the document _id)
router.get('/:id', (req, res) => {
    db.Exercise.findOne(
        { 'notes._id': req.params.id },
        { 'notes.$': true, _id: false }
    )
        .then(exercise => {
            // format query results to appear in one object, 
            // rather than an object containing an array of one object
            res.json(exercise.notes[0])
        })
});

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified comment document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Exercise.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(note => res.json(note))
})

// Destroy Route (DELETE/Delete): This route deletes a comment document 
// using the URL parameter (which will always be the comment document's ID)
router.delete('/:id', (req, res) => {
    db.Exercise.findOneAndUpdate(
        { 'notes._id': req.params.id },
        { $pull: { notes: { _id: req.params.id } } },
        { new: true }
    )
        .then(() => res.send('You deleted note ' + req.params.id))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router