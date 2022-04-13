module.exports = {

    async index(req, res){
        res.status(200).json({message: "SOU ADMIN"})
    },
    async admin(req, res){
        res.status(200).json({message: "VALIDADO"})
    },
    async pet(req, res){
        res.status(200).json({message: "TODOS PETS"})
    },
    async usuarios(req, res){
        res.status(200).json({message: "TODOS USUARIOS"})
    },
    async parceiros(req, res){
        res.status(200).json({message: "TODOS PARCEIROS"})
    }


}