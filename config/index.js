const express = require('express')

const router = require('../app/routes')

const listen = (app) => {
  app.listen(process.env.PORT ?? 3000)
  return app
}

module.exports = (app) =>
  listen(app).set('view engine', 'pug').set('views', `${__dirname}/../app/views`).use(express.static('public'), router)
