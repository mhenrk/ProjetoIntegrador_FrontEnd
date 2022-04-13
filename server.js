const express = require('express')
const app = express()
const path = require('path');
// const router = express.Router()

require('dotenv').config()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("", {title: 'Projeto Front End - DH'})
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/esqueci-senha', (req, res) => {
    res.render("esqueci-senha")
})

app.get('/registrar', (req, res) => {
    res.render("registrar")
})

app.get('/recupera-senha', (req, res) => {
    res.render("recupera-senha")
})





app.listen(process.env.PORT, () => console.log(`Server FrontEnd: http://localhost:${process.env.PORT}`))