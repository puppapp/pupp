require('dotenv').config()
import express from 'express'
import logger from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import passport from 'passport'

import database from './config/database'
import passportConfig from './config/passport'
import user from './user'
import auth from './auth'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, '/client')))
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(helmet())

database(process.env.MONGOLAB_URI || 'mongodb://localhost/pupp')
user.init(app)
auth.init(app)
passportConfig()

export default app
