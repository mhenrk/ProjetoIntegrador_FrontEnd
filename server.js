const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
// const router = express.Router()

require('dotenv').config()

app.use(cors({
    origin: `${process.env.BACKEND_URL}`
}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public/')));

app.get('/', (req, res) => {
    res.render("index", {
        title: 'DOIMZIM',
        menulist: ['Home', 'Sobre', 'Serviços', 'Contato']
    })
})

app.get('/login', (req, res) => {
    res.render("login", {
        title: "Faça login"
    })
})

app.get('/esqueci-senha', (req, res) => {
    res.render("esqueci-senha", {
        title: "Esqueci Minha Senha"
    })
})

app.get('/registrar', (req, res) => {
    res.render("registrar", {
        title: "Registrar"
    })
})

app.get('/recupera-senha', (req, res) => {
    res.render("recupera-senha", {
        title: "Recuperar Senha"
    })
})

app.get('/dashboard', (req, res) => {
    res.render("dashPerfil", {
        title: "Perfil"
    })
})

app.listen(process.env.PORT, () => console.log(`Server FrontEnd: http://localhost:${process.env.PORT}`))