const express = require('express')
const routes = express.Router()

const homeController = require('../controller/HomeController')

routes.get('/', homeController.index)

module.exports = routes