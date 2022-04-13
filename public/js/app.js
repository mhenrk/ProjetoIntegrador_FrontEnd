const url = 'http://localhost:3333/petshop'

function getUsuarios(){
    axios.get(`${url}/cadastra-user`)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function getOneUsuario(id){
    axios.get(`${url}/cadastra-user/${id}`)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function createUser(){
    axios.post(`${url}/cadastra-user/`, {

    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function updateUser(id){
    axios.update(`${url}/cadastra-user/${id}`, {
        
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function deleteUser(id){
    axios.update(`${url}/cadastra-user/${id}`)
    .then(resposta => console.log("Usuario Deletado"))
    .catch(erro => console.log(erro))
}

getUsuarios()