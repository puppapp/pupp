import passport from 'passport'

function initAuth (app) {
  app.get('/login', renderLogin)
  app.get('/auth/facebook', passport.authenticate('facebook', {session: false, scope: 'email'}))
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {session: false, failureRedirect: '/login'}),
    function (req, res) {
      res.redirect('/')
    }
  )
}

function renderLogin (req, res) {
  res.sendFile('login carai')
}

export default initAuth
