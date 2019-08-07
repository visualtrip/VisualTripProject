require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../models/User')
const Places = require('../models/Places.model')
const Hotels = require('../models/Hotels.model')

router.get('/', (req,res,next) => {

    console.log(req.user)
})




module.exports = router