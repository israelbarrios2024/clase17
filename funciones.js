function mostrarMensaje(){
    alert("Este es un mensaje de alerta !!!!");
}

function validarFormulario(){
    let nombre=document.getElementById("nombre").value
    if(nombre==""){
        alert("Ingresa el nombre !!!");
        return false;
    }
    return true;
}