async function consultaCEP() {
    let cep = document.querySelector('#cep').value

    if (cep.length < 8) {
        alert("Cep Inválido")
        return
    }

    
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then((resposta) => {
            resposta.json()
                .then((cep) => {
                    mostrarCEP(cep)
                })
        })

    
}

function mostrarCEP(objCep) {

    //limpo o formulário
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");

    //preencho o formulário com os dados da consulta
    document.getElementById('cep').value = objCep.cep;
    document.querySelector("#rua").value = objCep.logradouro
    document.querySelector("#bairro").value = objCep.bairro
    document.querySelector("#cidade").value = objCep.localidade
    document.querySelector("#uf").value = objCep.uf
}