async function consultaCEP() {
    let cep = document.querySelector('#cep').value

    if (cep.length < 8) {
        alert("Cep Inválido")
        return
    }

    let url = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    let cepJson = await url.json()

    mostrarCEP(cepJson)
}

function mostrarCEP(objCep) {
    document.getElementById('cep').value = ("")
    document.getElementById('rua').value = ("")
    document.getElementById('bairro').value = ("")
    document.getElementById('cidade').value = ("")
    document.getElementById('uf').value = ("")

    document.getElementById('cep').value = objCep.cep;
    document.getElementById("rua").value = objCep.logradouro
    document.getElementById("bairro").value = objCep.bairro
    document.getElementById("cidade").value = objCep.localidade
    document.getElementById("uf").value = objCep.uf
}