const { Router } = require('express')

const { page, ...middlewares } = require('./middlewares')

const root = Router()
const docs = Router()

docs
  .get('/', middlewares.docs.home, page('docs/home'))
  .get('/:category', middlewares.docs.category, page('docs/category'))
  .get('/:category/:slug', middlewares.docs.details, page('docs/details'))

root
  .get('/', middlewares.home, page('home'))
  .get('/about', page('about'))
  .get('/quran', middlewares.quran, page('quran'))
  .get('/books', middlewares.books, page('books'))
  .get('/academic', page('academic'))
  .get('/codes', middlewares.codes, page('codes'))
  .use('/docs', docs)

module.exports = root
