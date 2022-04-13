const express = require('express')
const routes = express.Router()

const petController = require('../controller/PetController')

routes.get('/', petController.index)
routes.get('/add', petController.store)
routes.get('/upd/:id', petController.update)
routes.get('/del/:id', petController.delete)

module.exports = routes