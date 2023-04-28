/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const express = require('express');
const path = require('path')
const cors = require('cors')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const usersCtrl = require('./controllers/users')
const commentsCtrl = require('./controllers/comments')
const exercisesCtrl = require('./controllers/exercises')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Middleware (app.use)
--------------------------------------------------------------- */
// CORS middleware:
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))



/* Mount routes
--------------------------------------------------------------- */
// This tells our app to look at the `controllers/comments.js` file 
// to handle all routes that begin with `localhost:3000/api/applications`
app.use('/api/users', usersCtrl)
app.use('/api/comments', commentsCtrl)
app.use('/api/exercises', exercisesCtrl)

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


// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});

