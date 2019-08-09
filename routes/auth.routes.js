require("dotenv").config();
const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const nodemailer = require('nodemailer')
const uploadCloud = require('../config/cloudinary.js')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

function generateCode() {
  const characters = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let token = ``;
  for (let i = 0; i < 25; i++) {
     token += characters[Math.floor(Math.random() * characters.length )];
  }
  return token
}

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/private",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', uploadCloud.single("imgPath"),(req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  //const localization = req.body.localization
  const email = req.body.email
  const confirmationCode = generateCode()
  const imgPath = req.file.url

  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate username and password' })
    return
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }
    console.log("yo soy el de arriba")
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      //localization,
      email,
      confirmationCode,
      imgPath
    })
    console.log("hola ester")
    newUser
      .save()
      .then(() => {
        res.redirect("/email");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" })
      })
  })



  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `${process.env.GMAIL}`,
      pass: `${process.env.GMAILPASS}`
    }
  })

  let { subject, message } = req.body

  message = `http://visualtrip.herokuapp.com/confirm/${confirmationCode}`

  transporter.sendMail({
    from: '"VisualTrip" <visualtrip@project.com>',
    to: email,
    subject: "Confirma tu cuenta. VisualTrip",
    text: message,
    html: ` <h1>Gracias por crear una cuenta en VisualTrip</h1>
  <h2>Activa tu cuenta pulsando en el siguiente link:</h2>
  <a role="button" class="btn btn-dark" href="${message}"><h3>Activar cuenta</h3></a>
  
    <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1565346754/visualtriplogo.jpg" alt="logo">`
  })
    .then(info => res.render('message', { email, subject, message, info }))
    .catch(error => console.log(error))

})

router.get("/confirm/:confirmationCode", (req, res, next) =>{
const codeId = req.params.confirmationCode
User.find({confirmationCode: codeId})
  .then(user => {  
    user.status = "Active"
  res.render('auth/confirmation', {user})})
  .catch(err => console.log("Hubo un error", err))

})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
