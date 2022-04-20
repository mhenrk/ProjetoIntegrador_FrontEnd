const url = 'http://localhost:3333/petshop'

function getUsuarios(){
    axios.get(`${url}/usuario`)
    .then(resposta => console.log(resposta.data))
    .catch(erro => console.log(erro))
}

function getOneUsuario(id){
    axios.get(`${url}/usuario/${id}`)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function createUser(){
    axios.post(`${url}/usuario/`, {

    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function updateUser(id){
    axios.update(`${url}/usuario/${id}`, {
        
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
}

function deleteUser(id){
    axios.update(`${url}/usuario/${id}`)
    .then(resposta => console.log("Usuario Deletado"))
    .catch(erro => console.log(erro))
}

getUsuarios()