const express = require('express')
const routes = express.Router()

const adminController = require('../controller/AdminController')
const loginController = require('../controller/LoginController')

routes.get('/', adminController.index)          /** /dashboard/ */
routes.get('/pet', adminController.index)       /** /dashboard/pet */
routes.get('/parceiro', adminController.index)  /** /dashboard/parceiro */
routes.get('/logout', loginController.logout)   /** /dashboard/logout */


/** ROTAS ADMINISTRATIVAS */
routes.get('/admin', adminController.admin)
routes.get('/admin/pet', adminController.pet)
routes.get('/admin/usuarios', adminController.usuarios)
routes.get('/admin/parceiros', adminController.parceiros)

module.exports = routes