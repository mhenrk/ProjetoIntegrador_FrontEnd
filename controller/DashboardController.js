module.exports = {

    async index(req, res) {
        // res.status(200).json({message: "Rota: DASHBOARD"})
        res.status(200).render("dashboard", {
            title: "Dashboard | Anymals"
            //terei que colocar mais controles no dash do admin
        })
    }

}