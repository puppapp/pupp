require('dotenv').config()
require('./config/database')(process.env.MONGOLAB_URI || 'mongodb://localhost/pupp')

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, '/client')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session(
  {
    secret: process.env.APP_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }
))

app.listen(app.get('port'), function () {
  console.log('Server on. Running on http://localhost:3000/')
})
