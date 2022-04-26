const express = require('express')
const routes = express.Router()

const petController = require('../controller/PetController')

routes.get('/', petController.index)
routes.get('/add', petController.store)

routes.get('/update/:id', petController.buscaPetId)
routes.post('/update/:id', petController.update)

routes.post('/del/:id', petController.delete)

module.exports = routes