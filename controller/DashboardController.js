const axios = require("axios")

module.exports = {

    async index(req, res) {
        res.status(200).render("dashboard", {
            session: req.session
            //por que tá vindo undefined?
        })
    },

    async showUserPets(req, res) {

        const { userID } = req.session

        await axios.get(`${process.env.BACKEND_URL}/usuario/${userID}`)
            .then(response => {
                if (response.data.pet === null) return

                res.status(200).render('dashboard_pet', {
                    pets: response.data.pet,
                    session: req.session
                })
            })
            .catch(erro => {
                console.log(`Ocorreu esse seguinte erro: ${erro}`)
                res.render('dashboard_pet', {
                    message: 'Pet não encontrado / não cadastrado'
                })
            })
    },

    async showParceiros(req, res) {

        await axios.get(`${process.env.BACKEND_URL}/parceiros/`)
            .then(response => {

                res.status(200).render('dashboard_parceiro', {
                    listaparceiro: response.data,
                    session: req.session
                })

            })
            .catch(erro => {
                console.log(`Ocorreu esse seguinte erro: ${erro}`)
                res.render('dashboard_parceiro', {
                    message: 'Parceiro não encontrado / não cadastrado'
                })
            })
    },

    async profile(req, res) {
        res.render('dashboard_perfil', {
            redirect: '/perfil',
            session: req.session
        })
    }
}