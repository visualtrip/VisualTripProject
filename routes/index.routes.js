const express = require('express')
const router = express.Router()

const Places = require('../models/Places.model')

/* GET home page */
router.get('/', (req, res, next) => {
  Places.find()
    .then(places => {
      console.log("places")
      res.render('index', { places , user: req.user})})
    .catch(err => console.log(err))
})

router.get("/email", (req, res, next) => {
  res.render("email-conf");
});

router.get("/ger/sorpresa", (req,res,next)=>{
  res.render("ger-sospecha")
})

router.get("/trolleo/ta", (req,res,next)=>{
  res.render("trollta")
})

router.get('/api', (req, res, next) => {
  Places.find()
    .then(allPlaces => res.json(allPlaces))
    .catch(err => console.log('error', console.log(err)))
})

router.get('/api/:id', (req, res, next) => {
  const placeId = req.params.id
  Places.findOne({_id: placeId})
    .then(thePlace => res.json(thePlace))
    .catch(err => console.log('error', console.log(err)))
})


module.exports = router
