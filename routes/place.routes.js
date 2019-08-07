require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Places = require('../models/Places.model')
const passport = require('passport')
const ensureLogin = require('connect-ensure-login')



router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const placeId = req.params.id
  Places.findById({ _id: placeId })
    .then(place => res.render('place-view', { place , user: req.user}))
    .catch(err => {
      console.log(err)
      res.render('auth/signup', { message: 'Es necesario registrarse' })
    })

})

module.exports = router