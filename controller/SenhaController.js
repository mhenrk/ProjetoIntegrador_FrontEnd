const axios = require('axios')
const { json } = require('express')

module.exports = {

    index(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("esqueci-senha", {
            title: "Esqueci Minha Senha"
        })
    },

    recover(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("recupera-senha", {
            title: "Recuperar Senha"
        })
    },

    async findEmail(req, res) {
        const email = req.body

        await axios.post(`${process.env.BACKEND_URL}/usuario/finduser`, email)
            .then(response => {

                const data = response.data
                res.redirect('/recuperar-senha')
                res.status(200).send(data)

            })
            .catch(e => console.log(`Ocorreu um erro: ${e}`))
    }
}