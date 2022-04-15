const express = require('express')
const routes = express.Router()

const senhaController = require('../controller/SenhaController')

routes.get('/', senhaController.index)

module.exports = routes