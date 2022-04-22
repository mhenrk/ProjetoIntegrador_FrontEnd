const express = require('express')
const routes = express.Router()

const registrarController = require('../controller/RegistrarController')

routes.get('/', registrarController.index)
routes.post('/add', registrarController.store)

module.exports = routes