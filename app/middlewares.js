const fetch = require('node-fetch')

const makePage = (pageSub) => (page) => (req, res) => res.render(`${pageSub}/${page}`)

exports.page = makePage('pages')

exports.error = makePage('errors')

exports.home = (req, res, next) => {
  res.locals.imgroot = '/images/index'
  res.locals.images = [
    {
      src: '1',
      alt: 'fatiha',
      caption: 'Fatihah 1: 1-7',
    },
    {
      src: '3',
      alt: 'baqarah255',
      caption: 'Baqarah 2: 255',
    },
    {
      src: '2',
      alt: 'falaq-naas',
      caption: 'Falaq 113: 1-5, Naas 114: 1-6',
    },
  ]
  next()
}

exports.books = (req, res, next) => {
  res.locals.books = [
    {
      href: 'https://drive.google.com/file/d/1bRwc2_N4j24JYH4J4S_tT5MCLk409AUf/view?usp=sharing',
      text: 'Hifz Quran (15 lines, colored)',
    },
    {
      href: 'https://drive.google.com/drive/folders/1tRS-4B5ltn7ijIf2L8r8hd-41eJZc1oG?usp=sharing',
      text: 'The Glorious Quran',
    },
    {
      href: 'https://drive.google.com/drive/folders/17URktdkL0JDdwUGTQirA6eb18BRgRDSu?usp=sharing',
      text: 'Al-Quran (Word by Word)',
    },
    {
      href: 'https://drive.google.com/drive/folders/1_C3JqB2wIAQEUWNowYYfdHWvs__rtRFh?usp=sharing',
      text: 'Hadith Books (Only available in Bengali)',
    },
  ]
  next()
}

exports.quran = async (req, res, next) => {
  const data = await fetch('https://choclacode.herokuapp.com/api/quran').then((r) => r.json())
  res.locals.surahs = data
  next()
}

exports.codes = (req, res, next) => {
  res.locals.codes = require('../data/codes.json')
  next()
}

exports.docs = {
  home(req, res, next) {
    const docs = require('../data/docs.json')
    res.locals.links = docs.categories
    next()
  },
  category(req, res, next) {
    const { docs, categories } = require('../data/docs.json')
    const { category } = req.params
    const links = docs[category]
    if (!links) res.redirect('/docs')
    res.locals = { links, category: categories.find((c) => c.href == category) }
    next()
  },
  details(req, res, next) {
    const { docs } = require('../data/docs.json')
    const { category, slug } = req.params
    if (!docs[category]) res.redirect('/docs')
    const doc = docs[category][slug]
    if (!doc) res.redirect(`/docs/${category}`)
    res.locals = { doc, category }
    next()
  },
}
