module.exports = {

    async index(req, res){
        res.status(200).json({message: "LISTANDO OS PETS"})
    },
    async store(req, res){
        res.status(200).json({message: "CRIANDO OS PETS"})
    },
    async update(req, res){
        res.status(200).json({message: "ATUALIZANDO OS PETS"})
    },
    async delete(req, res){
        res.status(200).json({message: "DELETANDO OS PETS"})
    }

}