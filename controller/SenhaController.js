const axios = require('axios')
const { json } = require('express')

module.exports = {

    index(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.render("esqueci-senha", {
            erro: ''
        })
    },

    recover(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        return res.render('recuperar-senha')
    },

    async findEmail(req, res) {
        const email = req.body

        await axios.post(`${process.env.BACKEND_URL}/usuario/finduser`, email)
            .then(response => {

                if (response.data) {
                    const data = response.data
                    return res.status(200).redirect('/recuperar-senha')
                }else{
                    res.render('esqueci-senha', {
                        erro: 'Email não encontrado / cadastrado'
                    })
                }
            })
            .catch(e => {
                console.log(`Ocorreu um erro: ${e}`)
                res.render('esqueci-senha', {
                    erro: 'Email não encontrado / cadastrado'
                })
            })
    }
}