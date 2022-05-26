const axios = require("axios")

module.exports = {

    async index(req, res) {

        const raca = await axios.get(`${process.env.BACKEND_URL}/raca`)
        const tipo = await axios.get(`${process.env.BACKEND_URL}/tipo`)
        const genero = await axios.get(`${process.env.BACKEND_URL}/genero`)
        const castracao = await axios.get(`${process.env.BACKEND_URL}/castracao`)
        const peso = await axios.get(`${process.env.BACKEND_URL}/peso`)

        res.status(200).render('petCreateModal', {
            raca: raca.data,
            tipo: tipo.data,
            genero: genero.data,
            castracao: castracao.data,
            peso: peso.data
        })
    },
    async store(req, res) {

        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }

        try {
            await axios.post(`${process.env.BACKEND_URL}/pet/add`,  {
                nome_pet: req.body.nome_pet,
                apelido_pet: req.body.apelido_pet,
                raca_pet_id: req.body.raca_pet_id,
                tipo_pet_id: req.body.tipo_pet_id,
                datanasc_pet: req.body.datanasc_pet,
                idade_pet: req.body.idade_pet,
                genero_pet_id: req.body.genero_pet_id,
                pet_castrado_id: req.body.pet_castrado_id,
                peso_pet_id: req.body.peso_pet_id
            }, config)
            .then(response => {
                console.log(response.data)
                res.redirect('/dashboard/pet')
            })
            .catch(e => {
                console.log(`Ocorreu esse erro ${e}`)
                res.redirect('/dashboard/pet/add')
            })
        } catch (error) {
            console.log(`Ocorreu este erro ${error}`)
        }
    },
    
    async update(req, res) {

        const petID = req.params.id
        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }

        const pet = await axios.get(`${process.env.BACKEND_URL}/pet/${petID}`, config)

        res.status(200).render('petEditModal', {
            pet: pet.data
        })
        
    },
    async delete(req, res) {
        res.status(200).json({ message: "DELETANDO OS PETS" })
    },

    async buscaPetId(req, res) {

        const petID = req.params.id
        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }

        const pet = await axios.get(`${process.env.BACKEND_URL}/pet/${petID}`, config)

        res.status(200).render('petEditModal', {
            pet: pet.data
        })
        
    },

    async storePet(req, res) {

        const petID = req.params.id
        const userToken = req.session.userToken

        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        }

        const pet = await axios.get(`${process.env.BACKEND_URL}/pet/${petID}`, config)

        res.status(200).render('petEditModal', {
            pet: pet.data
        })
        
    }

}