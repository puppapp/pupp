import app from './app'

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'))
})
