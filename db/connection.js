//require('dotenv').config()

const mongoose = require('mongoose')
// mongoose.connect - to tell mongoose what database
mongoose.connect('mongodb+srv://aaronjasper94:Wordsmith94@cluster0.nhacdwx.mongodb.net/fonem')
// check for error or connecting
mongoose.connection.on('connected', ()=> console.log('we live baby!'))
mongoose.connection.on('error', ()=>console.log('we not live baby '))

module.exports = mongoose