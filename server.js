//require('dotenv').config()
const express = require("express");
const app = express();
//const PORT = process.env.port

const PORT = 9000;
const expressLayouts = require('express-ejs-layouts')
const authRoutes = require("./controllers/authController")
const session = require("express-session")
const packRoutes = require('./controllers/packController');

app.set("view engine", "ejs");

//MIDDLEWARES

app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(session({secret: "randomdata", cookie: { maxAge: 3600000}}));
app.use(authRoutes);



//home route
app.get('/', (req, res) => {
  res.render('home.ejs')
});

//security

app.use((req, res, next) => {
  if(!req.session.userId){
    res.redirect('/login')
    return
  }
  next();
})

app.use('/pack', packRoutes);


//app.use('/packages', packageRoutes);



//nav bar routes

app.get('/index', (req, res) => {
  res.render('index.ejs')
});
app.get('/about', (req, res) => {
  res.render('about.ejs')
});
app.get('/events', (req, res) => {
  res.render('events.ejs')
});
app.get('/forum', (req, res) => {
  res.render('forum.ejs')
});

app.get('/packages', (req, res) => {
  res.render('./pack/orders.ejs')
});

app.get('/resources', (req, res) => {
  res.render('resources.ejs')
});
app.get('/sme', (req, res) => {
  res.render('sme.ejs')
});

// package routes
app.get("/pack", (req, res) => {
  res.render("pack/orders.ejs")
});

app.get('/interest', (req, res) => {
  res.render('interest.ejs')
});

app.listen(PORT, () => console.log("We finna Up The Score:", PORT));