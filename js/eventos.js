

document.addEventListener("DOMContentLoaded", function(){
    
    const divMensaje = document.querySelector("#divButton")

    if (divMensaje) {
        divMensaje.addEventListener("click", function(){
            alert("Hola! , soy el div!")
        })
    }
})

