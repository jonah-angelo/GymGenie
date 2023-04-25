/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const express = require('express');
const path = require('path')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const workoutsCtrl = require('./controllers/workouts')
const usersCtrl = require('./controllers/users')
const notesCtrl = require('./controllers/notes')
const exercisesCtrl = require('./controllers/exercises')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Middleware (app.use)
--------------------------------------------------------------- */
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


/* Mount routes
--------------------------------------------------------------- */
// This tells our app to look at the `controllers/comments.js` file 
// to handle all routes that begin with `localhost:3000/api/applications`
app.use('/workouts', workoutsCtrl)
app.use('/users', usersCtrl)
app.use('/notes', notesCtrl)
app.use('/exercises', exercisesCtrl)

app.get('/seed', function (req, res) {
    // Remove any existing pets
    db.Exercise.deleteMany({})
        .then(removedExercises => {
            console.log(`Removed ${removedExercises.deletedCount} exercises`)

            // Seed the pets collection with the seed data
            db.Exercise.insertMany(db.seedExercises)
                .then(addedExercises => {
                    console.log(`Added ${addedExercises.length} exercises`)
                    res.json(addedExercises)
                })
        })
});


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});

