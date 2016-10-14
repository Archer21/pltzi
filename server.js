'use strict'

const http = require('http')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const passport = require('passport')
const pltzi = require('pltzi-client')

const config = require('./config')
const auth = require('./auth')

const PORT = process.argv[2] || 5050

const app = express()
const client = pltzi.createClient(config.client)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(auth.localStrategy)
passport.use(auth.facebookStrategy)
passport.serializeUser(auth.serializeUser)
passport.deserializeUser(auth.deserializeUser)

app.get('/', (req, res) => {

  res.render('index')
})

app.get('/signin', (req, res) => {
  res.render('index')
})

app.get('/email', (req, res) => {
  res.render('index')
})

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin'
}));

app.post('/auth/facebook', passport.use('facebook', { scope: 'email' }))
app.post('/auth/facebook/callback', passport.use('facebook', { 
  successRedirect: '/',
  failureRedirect: '/signin'
 }))

app.get('/signup', (req, res) => {
  res.render('index')
})

app.post('/signup', (req, res) => {
  let user = req.body
  client.saveUser(user, (err, user) => {
    if (err) {
      return res.status(500).send(err.message)
    }
    res.redirect('/email')
  })

})

let server = http.createServer(app)

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.status(401).send({ error: 'not authenticated' })
}

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

