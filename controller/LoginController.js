const axios = require("axios")

module.exports = {

    index(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.render('login', {
            erro: ''
        })
    },

    auth(req, res) {
        const userLogin = {
            email: req.body.email,
            password: req.body.password,
        }

        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${token}`,
        //     }
        // }

        axios.post(`${process.env.BACKEND_URL}/token`, userLogin)
            .then(response => {

                const { id, email, nome, token, is_admin } = response.data

                if (res.statusCode === 200 && is_admin) {

                    req.session.userID = id
                    req.session.userEmail = email
                    req.session.userName = nome
                    req.session.userToken = token
                    req.session.autenticated = true

                    res.redirect('/dashboard/admin')

                } else if (res.statusCode === 200 && !is_admin) {

                    req.session.userID = id
                    req.session.userEmail = email
                    req.session.userName = nome
                    req.session.userToken = token


                    return res.render('dashboard', {
                        redirect: '/dashboard',
                        session: req.session
                    })

                } else {
                    res.render('login', {
                        erro: 'Usuário / Senha Inválido'
                    })
                }

            }).catch(erro => {
                console.log(erro.message)
                res.render('login', {
                    erro: 'Usuário / Senha Inválido'
                })
            })
    }    
}