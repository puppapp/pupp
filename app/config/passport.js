require('dotenv').config()
import passport from 'passport'
import PassportFacebook from 'passport-facebook'
import mongoose from 'mongoose'

const FacebookStrategy = PassportFacebook.Strategy

export default function () {
  const User = mongoose.model('User')

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.APP_URL + 'auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails']
  },
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate(
      { 'facebookId': profile.emails[0].value },
      { 'name': profile.displayName,
        'photo': profile.photos[0].value,
        'email': profile.emails[0].value },
      function (erro, user) {
        if (erro) {
          console.log(erro)
          return cb(erro)
        }
        return cb(null, user)
      }
    )
  }))
}
