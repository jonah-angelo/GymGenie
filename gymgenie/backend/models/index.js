require('dotenv').config()
const mongoose = require('mongoose')
const mongodbUri = process.env.MONGODBURI;

(async function () {
    await mongoose.connect(mongodbUri);
    console.log('Connected to MongoDB');
})().catch(err => console.log(err));



// Export models and seed data to `server.js`
module.exports = {
    User: require('./user'),
    Exercise: require('./exercise'),
    Comment: require('./comment'),
    seedExercises: require('./seed'),
}