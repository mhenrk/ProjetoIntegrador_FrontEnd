const express = require('express')
const routes = express.Router()

const loginController = require('../controller/LoginController')

routes.get('/', loginController.index)
routes.post('/auth', loginController.auth)

module.exports = routes