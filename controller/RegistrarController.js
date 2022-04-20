module.exports = {

    index(req, res){
        // res.status(200).json({message: "logando.. aguarde"})
        res.status(200).render("registrar", {
            title: "Registre-se"
        })
    }
}