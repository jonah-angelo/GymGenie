require('dotenv').config()
const mongoose = require('mongoose')
const mongodbUri = process.env.MONGODBURI;

(async function () {
    await mongoose.connect(mongodbUri);
    console.log('Connected to MongoDB');
})().catch(err => console.log(err));


module.exports = {
    Workout: require('./Workout'),
}

// Export models and seed data to `server.js`
module.exports = {
    Note: require('./note'),
    User: require('./user')
}