const btnEnviar = document.getElementById("btn-envio")
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const msgInput = document.getElementById("mensagem")


function erroBox(elemento, msg){
    let pEl = document.getElementById(elemento)
    pEl.textContent = msg
    limpaErro()
}

function limpaErro(){
    setInterval(() => {
        erroBox("nome-erro", "")
        erroBox("email-erro", "")
        erroBox("msg-erro", "")
    }, 5000);
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('clicado')

    const nomeInputValida = nomeInput.value === ""
    const emailInputValida = msgInput.value === ""
    const msgInputValida = msgInput.value === ""
    
    nomeInputValida ? erroBox("nome-erro","Informe seu nome") : erroBox("nome-erro","preenchido")

    emailInputValida ? erroBox("email-erro","Informe seu email") : erroBox("nome-erro","preenchido")
    
    msgInputValida ? erroBox("msg-erro", "Digite sua mensagem") : erroBox("msg-erro", "preenchido")

   
})