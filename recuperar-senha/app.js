const maxDigit = 9

function numAleatorio(){
    return Math.round(Math.random() * maxDigit)
}

function geradorEsqueciSenha(){
    
    let conjuntoNumerico = []

    for(let i = 0; i < 6; i++){
        conjuntoNumerico.push(numAleatorio())
    }
    
    setTimeout(() => {
        for(let k = 0; k < 6; k++){
            document.querySelectorAll('.box')[k].innerHTML = conjuntoNumerico[k]
        }
    }, 2500);

    return conjuntoNumerico
}

console.log(geradorEsqueciSenha())