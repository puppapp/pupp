import passport from 'passport'

function initAuth (app) {
  app.get('/login', renderLogin)
  app.get('/auth/facebook', passport.authenticate('facebook'))
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/', failureRedirect: '/login'
  }))
}

function renderLogin (req, res) {
  res.send('Login aqui carai')
}

export default initAuth
