const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()


// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Routes
app.use('/breads', breadController)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(8080, console.log('listening on port 8080'))

