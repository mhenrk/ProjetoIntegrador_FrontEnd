module.exports = {

    async index(req, res){
        // res.status(200).json({message: "Rota: DASHBOARD"})
        res.status(200).render("dashboard", {
            title: "Dashboard | Anymals"
            //terei que colocar mais controles no dash do admin
        })
    },

    async admin(req, res){
        // res.status(200).json({message: "Rota Admin: DASHBOARD"})
        res.status(200).render("dashboard", {
            title: "Dashboard | Anymals"
            //terei que colocar mais controles no dash do admin
        })
    },
    async pet(req, res){
        res.status(200).json({message: "Rota Admin: DASHBOARD"})
    },
    async usuarios(req, res){
        res.status(200).json({message: "Rota Admin: DASHBOARD"})
    },
    async parceiros(req, res){
        res.status(200).json({message: "Rota Admin: DASHBOARD"})
    }


}