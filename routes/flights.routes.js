require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Places = require('../models/Places.model')

const Amadeus = require('amadeus')
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
});



module.exports = router