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

        axios.post(`${process.env.BACKEND_URL}/token`, userLogin)
            .then(response => {

                const { is_admin } = response.data
                const data = JSON.stringify(response.data)
            

                if (response.status === 200 && is_admin) {
                    localStorage.setItem('usuario', data)
                    res.redirect("/dashboard/admin")
                } else if (response.status === 200 && !is_admin) {
                    localStorage.setItem('usuario', data)
                    res.redirect("/dashboard")
                }
            }).catch(erro => console.log(erro.message))
    },

    logout(req, res) {
        sessionStorage.removeItem('perfil')
        res.status(200).redirect("/")
    }

}