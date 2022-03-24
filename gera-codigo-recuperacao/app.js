const maxDigit = 9

function numAleatorio(){
    return Math.round(Math.random() * maxDigit)
}

function geradorEsqueciSenha(){
    
    let conjuntoNumerico = []

    for(let i = 0; i < 6; i++){
        conjuntoNumerico.push(numAleatorio())
    }

    return conjuntoNumerico
}

//console.log(geradorEsqueciSenha())