const express = require('express')
const routes = express.Router()

const recuperarSenhaController = require('../controller/SenhaController')

routes.get('/', recuperarSenhaController.recover)

module.exports = routes