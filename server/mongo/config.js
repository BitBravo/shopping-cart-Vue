const mongoose = require('mongoose')
mongoose.connect('mongodb://giant63:qwerty12@ds127362.mlab.com:27362/vue-shop', {
    useNewUrlParser: true
}); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose