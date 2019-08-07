require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Places = require('../models/Places.model')
const Fligths = require('../models/Flights.model')


// router.get('/:id', (req,res,next) =>{

// //   const placeId = req.params.id
//   Places.find({_id : placeId})
//   .then(thePlace => {
//     //console.log(req.user) passport almacena el usuario logeado en el req.user

//     .then(flyInfo =>{
//       console.log(flyInfo.data[0].origin)
//       //console.log(res.body)
//       //res.render('flights-info', flyInfo.data)
//     })
//     .catch(err => console.log('error', console.log(err)))

//   })
//   .catch(err => console.log('error', console.log(err)))
// })

module.exports = router