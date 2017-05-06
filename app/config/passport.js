require('dotenv').config()
import passport from 'passport'
import PassportFacebook from 'passport-facebook'
import mongoose from 'mongoose'
import userModel from './../user/model'

const FacebookStrategy = PassportFacebook.Strategy
userModel()

export default function () {
  const User = mongoose.model('User')

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.APP_URL + '/auth/facebook/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(
      { 'login': profile.emails[0].value },
      { 'name': profile.displayName,
        'photo': profile.photos[0].value },
      function (erro, user) {
        if (erro) {
          console.log(erro)
          return done(erro)
        }
        return done(null, user)
      }
    )
  }))
}
