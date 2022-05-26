const axios = require("axios")

module.exports = {

    async index(req, res) {
        // console.log(req.session)
        res.status(200).render("dashboard", {
            session: req.session,
            //por que tá vindo undefined?
        })
    },

    async showUserPets(req, res) {
        // console.log(req.session)

        const userID = req.session.userID
        
        await axios.get(`${process.env.BACKEND_URL}/usuario/${userID}`)
            .then(response => {
                res.status(200).render('dashboard_pet', {
                    listapet: response.data.pet,
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

        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }
        
        await axios.get(`${process.env.BACKEND_URL}/parceiros/`, config)
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
        // console.log(req.session)
        const userID = req.session.userID

        axios.get(`${process.env.BACKEND_URL}/usuario/${userID}`)
            .then(response => {

                res.render('dashboard_perfil', {
                    user: response.data,                    
                    session: req.session
                })
            })
            .catch(e => {
                res.render('dashboard_perfil', {
                    erro: `Ocorreu um erro: ${e}`
                })
            })
    },

    async profileUpdate(req, res) {

        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }
        
        const userBody = req.body
        console.log(userBody)

        axios.put(`${process.env.BACKEND_URL}/usuario/upd`, userBody, config)
        .then(response => {
            console.log(response)
            res.render('dashboard_perfil', {
                user: response.data,
                session: req.session
            })
        })
        .catch(e => {
            console.log(e.message)
            res.render('dashboard', {
                //inserir if para ver o user quando é / não usado
                session: req.session,
                erro: `Ocorreu um erro: ${e}`
            })
        })
    },


    logout(req, res) {
        req.session = ""
        res.status(200).redirect('/')
    },

    close (req, res) {
        res.status(200).redirect('/dashboard')
    }
}