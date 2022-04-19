module.exports = {

    async index(req, res){
        res.status(200).json({message: "Rota: DASHBOARD"})
    },
    async admin(req, res){
        res.status(200).json({message: "Rota Admin: DASHBOARD"})
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