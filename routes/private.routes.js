require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../models/User')
const Places = require('../models/Places.model')
const Hotels = require('../models/Hotels.model')
const ensureLogin = require('connect-ensure-login')

router.get('/', ensureLogin.ensureLoggedIn(), (req,res,next) => {

    Hotels.find({owner: req.user.username})
    .then(hotels=> res.render('auth/private', {userHotels: hotels, user: req.user}))
    .catch(err => console.log('error', console.log(err)))
})

router.get('/:id/delete', ensureLogin.ensureLoggedIn(), (req, res, next)=> {

    const hotelId = req.params.id
    Hotels.findOneAndRemove({_id: hotelId})
    .then(()=> res.redirect('/private'))
    .catch(err => console.log('error', console.log(err)))
})




module.exports = router