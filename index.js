require('dotenv').config()
require('./config/database')(process.env.MONGOLAB_URI || 'mongodb://localhost/pupp')

import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '/client')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(helmet())

app.listen(app.get('port'), function () {
  console.log('Server on')
})
