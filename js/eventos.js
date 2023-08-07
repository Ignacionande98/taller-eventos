

document.addEventListener("DOMContentLoaded", function(){
    
    const divMensaje = document.querySelector("#divButton")
    const button = document.querySelector("button")

    if (divMensaje && button) {
        divMensaje.addEventListener("click", function(event){
            
            alert("Hola! , soy el div!")
            event.stopPropagation()
        })
        
    }
})

