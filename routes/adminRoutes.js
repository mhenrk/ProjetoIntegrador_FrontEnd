const express = require('express')
const routes = express.Router()

const adminController = require('../controller/AdminController')

routes.get('/', adminController.index)
routes.get('/admin', adminController.admin)
routes.get('/admin/pet', adminController.pet)
routes.get('/admin/usuarios', adminController.usuarios)
routes.get('/admin/parceiros', adminController.parceiros)

module.exports = routes