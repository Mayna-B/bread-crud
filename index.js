const express = require('express')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// routes
app.use('/breads', breadController)

const PORT = process.env.PORT || 8080

app.listen(8080, console.log('listening on port 8080'))

