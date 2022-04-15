const express = require('express')
const routes = express.Router()

const recuperarSenhaController = require('../controller/SenhaController')

routes.post('/', recuperarSenhaController.recover)

module.exports = routes