require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../models/User')
const Places = require('../models/Places.model')
const Hotels = require('../models/Hotels.model')

function createUrl(city) {
  return `https://www.triposo.com/api/20181213/poi.json?location_id=${city}&tag_labels=hotels&bookable=1&fields=id,name,score,intro,booking_info&order_by=-score&account=${process.env.ACOUNT}&token=${process.env.TOKEN}`

}


// router.get('/:id', (req,res,next) =>{

const placeId = req.params.id
Places.find({ _id: placeId })
  .then(thePlace => {

    placeLocation = thePlace[0].airport
    const URL = createUrl(placeLocation)
    console.log(req.user, "prueba de fuego")
    axios.get(URL)
      .then(hotels => res.render('info', { hotels: hotels.data.results, user: req.user }))
      .catch(err => console.log('error', console.log(err)))
  })
  .catch(err => console.log('error', console.log(err)))
    //console.log(req.user) passport almacena el usuario logeado en el req.user
 
})

router.post('/:id', (req, res, next) => {
  const { name, urlBooking, score, description } = req.body
  const { owner_id } = req.user._id


  Hotels.create({ name, urlBooking, score, description, owner: owner_id })
    .then(newHotel => console.log(newHotel))
    .catch(err => console.log(err))



})



module.exports = router