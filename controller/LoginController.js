module.exports = {

    index(req, res){
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("login", {
            title: "Faça Login"
        })
    },
    
}