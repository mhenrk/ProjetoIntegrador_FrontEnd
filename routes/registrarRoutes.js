const express = require('express')
const routes = express.Router()

const registrarController = require('../controller/RegistrarController')

routes.get('/', registrarController.index)

module.exports = routes