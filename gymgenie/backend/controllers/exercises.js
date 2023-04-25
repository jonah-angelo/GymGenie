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
    db.Exercise.find({})
        .then(exercises => {
            res.json(exercises)
            console.log(exercises)
            })
        })




/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router