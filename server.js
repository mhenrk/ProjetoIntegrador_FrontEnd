const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')

const adminRoutes = require('./routes/adminRoutes')
const loginRoutes = require('./routes/loginRoutes')
const petRoutes = require('./routes/petRoutes')

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
        title: 'Petshop Anymals',
        menulist: ['Home', 'Sobre', 'Serviços', 'Contato'],
        footer: [
            [
                {
                    url: "mailto:email@gmail.com",
                    icone: "img/footer-email.png"
                },
                {
                    url: "http://wa.me/+55",
                    icone: "img/footer-email.png"
                }
            ],
            [
                "Caminhada",
                "Vacinação",
                "Petshop",
                "Banho",
                "Tosa",
            ],
            [
                {
                    url: "https://instagram.com",
                    icone: "img/footer-email.png"
                },
                {
                    url: "https://facebook.com",
                    icone: "img/footer-email.png"
                },
                {
                    url: "https://youtube.com",
                    icone: "img/footer-email.png"
                },
                {
                    url: "https://twitter.com",
                    icone: "img/footer-email.png"
                }, 
            ]
        ]
    })
})

//app.use("/registrar", registrarRoutes)
app.use('/login', loginRoutes)

//validação/redirecionamento para o controlador de acordo com a flag is_admin do banco
//usuario logado pode ser ou não admin
app.use('/dashboard', adminRoutes)
app.use('/dashboard/pet', petRoutes)

//app.use("/esqueci-senha", recoverRoutes)

app.listen(process.env.PORT, () => console.log(`Server FrontEnd: http://localhost:${process.env.PORT}`))