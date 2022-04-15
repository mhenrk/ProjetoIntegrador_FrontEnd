module.exports = {

    index(req, res){
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("esqueci-senha", {
            title: "Esqueci Minha Senha"
        })
    },

    recover(req, res){
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("recupera-senha", {
            title: "Recuperar Senha"
        })
    },
    
}