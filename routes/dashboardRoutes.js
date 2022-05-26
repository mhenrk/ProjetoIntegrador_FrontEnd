const express = require('express')
const routes = express.Router()

const dashboardController = require('../controller/DashboardController')
const petController = require('../controller/PetController')

/** /dashboard */
routes.get('/', dashboardController.index)

routes.get('/perfil', dashboardController.profile)
routes.post('/perfil/update', dashboardController.profileUpdate)

routes.get('/pet', dashboardController.showUserPets)

routes.get('/pet/add', petController.index)
routes.post('/pet/add', petController.store)

routes.post('/pet/update/', petController.buscaPetId)
routes.post('/pet/update/:id', petController.storePet)

routes.get('/parceiro', dashboardController.showParceiros)

routes.get('/logout', dashboardController.logout)
routes.get('/close', dashboardController.close)

module.exports = routes