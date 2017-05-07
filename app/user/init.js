import userModel from './model'

function initUser (app) {
  userModel()
  app.get('/', renderIndex)
  app.get('/profile', renderProfile)
}

function renderIndex (req, res) {
  res.send('Pagina inicial')
}

function renderProfile (req, res) {
  res.send('Profile do usuario aqui!')
}

export default initUser
