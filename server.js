const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
const session = require('express-session')

const loginRoutes = require('./routes/loginRoutes')
const registrarRoutes = require('./routes/registrarRoutes')
const senhasRoutes = require('./routes/esqueciSenhaRoutes')
const recuperarSenhasRoutes = require('./routes/recuperarSenhaRoutes')
const homeRoutes = require('./routes/homeRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')

require('dotenv').config()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(cors({
    origin: `${process.env.BACKEND_URL}`
}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', homeRoutes)

app.use("/login", loginRoutes)
app.use("/esqueci-senha", senhasRoutes)
app.use("/recuperar-senha", recuperarSenhasRoutes)

app.use("/registrar", registrarRoutes)
app.use('/dashboard', dashboardRoutes)

app.listen(process.env.PORT, () => console.log(`Server FrontEnd: http://localhost:${process.env.PORT}`))