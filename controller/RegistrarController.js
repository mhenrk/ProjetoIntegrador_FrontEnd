const axios = require('axios')

module.exports = {

    index(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("registrar", {
            title: "Registre-se"
        })
    },

    async store(req, res) {

        console.log(req.body)

        try {
            await axios.post(`${process.env.BACKEND_URL}/usuario/add`, {
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password
            })
            .then(response => {
                console.log(response.data)
                res.redirect('/')
            })
            .catch(e => console.log(`Ocorreu um erro ${e}`))
        } catch (error) {
            console.log(`Ocorreu um erro ${error}`)
        }
    },


}