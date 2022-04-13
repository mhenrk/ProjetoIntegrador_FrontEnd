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
        title: 'DOIMZIM',
        menulist: ['Home', 'Sobre', 'Serviços', 'Contato']
    })
})

app.use('/login', loginRoutes)
app.use('/dashboard', adminRoutes)
app.use('/dashboard/pet', petRoutes)

app.listen(process.env.PORT, () => console.log(`Server FrontEnd: http://localhost:${process.env.PORT}`))