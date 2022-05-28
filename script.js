const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warning")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let aseguroEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML=""
    if(nombre.value.length==0){
        warning += `Falta colocar nombre <br>`
        entrar = true
    }
    if(apellido.value.length==0){
        warning += `Falta colocar apellido <br>`
        entrar = true
    }
    if(!aseguroEmail.test(email.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warning
    }
})