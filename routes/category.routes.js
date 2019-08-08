require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Places = require('../models/Places.model')


router.get('/sorpresa', (req, res) => {
  const random = Math.floor(Math.random() * 24)
  Places.find()
    .then(places => {
      res.render('categories-index', { places: [places[random]], user: req.user})
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  const catName = req.params.id
  Places.find({ category: catName })
    .then(places => res.render('categories-index', {places: places , user: req.user}))
    .catch(err => console.log(err))
})
  
module.exports = router
