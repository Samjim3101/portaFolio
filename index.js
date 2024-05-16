function ShowHide() {
    var encriptado = document.getElementsByClassName("encriptado")[0];
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    
    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober") 
                        .replace(/u/gi, "ufat")

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    Swal.fire({
        title: "¡Listo!",
        text: "Tu texto se ha encriptado!",
        icon: "success"
      });
      tituloMensaje.textContent = textoCifrado
    //   tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    // personas.src = "./img/desencriptado.jpg";
    personas = "";
    
    
} else {
    personas.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el  texto que deseas encriptar o desencriptar";
    // alert("Debes ingresar algún texto")
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ingresar algún texto",
        footer: 'Recuerda que debe ser en minúsculas y sin acentos'
    });
}
}

function requerimientos() {
    var boton = document.getElementsByClassName("enviar")[0];
}

function variableNombre() {
    let nombre = document.getElementById("nombre")
}
