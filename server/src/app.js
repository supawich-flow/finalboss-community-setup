// import dependencies
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.js')
const myProfileRoutes = require('./routes/myProfiles.js')
const usersRoutes = require('./routes/users.js')

//use Express
const app = express()

//connect middlewares
app.use(cors())
app.use(express.json())

// req log
app.use((req, res, next) => {
  console.log("📍 Method:", req.method);        // เช่น GET, POST
  console.log("📍 URL:", req.url);              // เช่น /api/posts
  console.log("📍 Headers:", req.headers);      // มี token อยู่ในนี้
  console.log("📍 Body:", req.body);            // ใช้กับ POST/PUT
  console.log("📍 Query:", req.query);          // เช่น ?page=2&limit=10
  console.log("📍 Params:", req.params);        // เช่น /users/:id
  next();
});

//routes

// auth
app.use('/api/auth', authRoutes)

// myProfiles
app.use('/api/users/me', myProfileRoutes)

// users
app.use('/api/users', usersRoutes)

module.exports = app
