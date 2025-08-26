// import dependencies
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.js')

//use Express
const app = express()

//routes
app.use('api/auth', authRoutes)

//connect middlewares
app.use(cors())
app.use(express.json())

module.exports = app
