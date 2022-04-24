const axios = require("axios")

module.exports = {

    async index(req, res) {
        // res.status(200).json({message: "Rota: DASHBOARD"})
        res.status(200).render("dashboard", {
            title: "Dashboard | Anymals"
            //terei que colocar mais controles no dash do admin
        })
    },

    async showUserPets(req, res) {

        const userID = req.session.userID

        //precisa recupera o ID do usuário na sessão
        //`${process.env.BACKEND_URL}/usuario/${userID}`
        await axios.get(`${process.env.BACKEND_URL}/usuario/1`) 
            .then(response => {
                if (response.data.pet === null) return

                res.status(200).render('dashboard_pet' , {
                    title: 'Dashboard | Pet',
                    listapet: response.data.pet
                })

            })
            .catch(erro => console.log(`Ocorreu esse seguinte erro: ${erro}`))
    },

    async showParceiros(req, res) {

        await axios.get(`${process.env.BACKEND_URL}/parceiros/`)
            .then(response => {
                
                res.status(200).render('dashboard_parceiro' , {
                    title: 'Dashboard | ParceiroX',
                    listaparceiro: response.data
                })

            })
            .catch(erro => console.log(`Ocorreu esse seguinte erro: ${erro}`))
    }
}