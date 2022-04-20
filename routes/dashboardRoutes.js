const express = require('express')
const routes = express.Router()

const dashboardController = require('../controller/DashboardController')

/** /dashboard */
routes.get('/', (req, res) => {
    res.status(200).render('dashboard', {
        title: 'Dashboard | DH Anymals'
    })
})

routes.get('/admin', (req, res) => {
    res.status(200).render('dashboard' , {
        title: 'Dashboard Admin | DH Anymals'
    })
})

/** /dashboard/perfil */
routes.get('/perfil', (req, res) => {
    res.status(200).render('dashboard_perfil' , {
        title: 'Dashboard Admin | Perfil'
    })
})

routes.get('/admin/perfil', (req, res) => {
    res.status(200).render('dashboard_perfil' , {
        title: 'Dashboard Admin | Perfil'
    })
})

/** /dashboard/pet */
routes.get('/pet', (req, res) => {
    res.status(200).render('dashboard_pet' , {
        title: 'Dashboard | Pet'
    })
})

routes.get('/admin/pet', (req, res) => {
    res.status(200).render('dashboard_pet' , {
        title: 'Dashboard Admin | Pet'
    })
})

/** /dashboard/parceiro */
routes.get('/parceiro', (req, res) => {
    res.status(200).render('dashboard_parceiro' , {
        title: 'Dashboard | Parceiros'
    })
})

routes.get('/admin/parceiro', (req, res) => {
    res.status(200).render('dashboard_parceiro' , {
        title: 'Dashboard Admin | Parceiros'
    })
})

/** /dashboard/logout */
routes.get('/logout', (req, res) => {
    res.status(200).redirect('/')
})

module.exports = routes