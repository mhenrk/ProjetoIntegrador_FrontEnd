const axios = require("axios")

module.exports = {

    index(req, res) {
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("login", {
            title: "Faça Login"
        })
    },

    auth(req, res) {
        const userLogin = {
            email: req.body.email,
            password: req.body.password
        }

        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Authorization": `Bearer ${token}`,
        //     }

        // }

        axios.post(`${process.env.BACKEND_URL}/token`, userLogin)
            .then(response => {
                const { id, email, token, is_admin } = response.data

                req.session.user = {
                    id,
                    email,
                    token
                }

                if (res.statusCode === 200 && is_admin) {
                    req.session.autenticated = true
                    // console.log(`Session: ${req.sessionID} é Admin? ${is_admin}`)
                    res.render('/dashboard/admin', {
                        title: 'Dashboard Admin | DH Anymals',
                        email: req.session.user.email
                    })
                } else if (res.statusCode === 200 && !is_admin) {

                    // console.log(`Session: ${req.sessionID} é Admin? ${is_admin}`)

                    res.render('dashboard', {
                        title: 'Dashboard | DH Anymals',
                        email: req.session.user
                    })
                } else {

                    // console.log(`Session: ${req.sessionID} é Admin? ${is_admin}`)

                    res.status(403).send({
                        message: 'Usuário / Senha Inválidos'
                    })
                }

            }).catch(erro => console.log(erro.message))
    },

    logout(req, res) {
        req.session = ""
        res.redirect("/")
    }

}