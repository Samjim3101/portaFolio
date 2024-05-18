
document.addEventListener('DOMContentLoaded', function() {

  function abrirPDF() {
    var pdfURL = 'img/CurriculumSamuel.pdf';
    window.open(pdfURL, '_blank');
}

document.getElementById('abrirPDF').addEventListener('click', abrirPDF);
});


function mail() {
  console.log("it's works!");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    console.log("nuestro string esta vacio");
    document.getElementById("nombre_error").textContent =
      "El campo nombre no debe estar vacío.*";
  } else {
    if (nombre.length > 50) {
      document.getElementById("nombre_error").textContent =
        "El campo solo soporta 50 caracteres.*";
    } else {
      document.getElementById("nombre_error").textContent = "";
      let email = document.getElementById("email").value;
      if (email.length == 0) {
        document.getElementById("email_error").textContent =
          "El campo nombre no debe estar vacío.*";
      } else {
        if (!emailRegex.test(email)) {
          document.getElementById("email_error").textContent =
            "El email que se agrego no es correcto.*";
        } else {
          document.getElementById("email_error").textContent = "";
          let asunto = document.getElementById("asunto").value;
          if (asunto.length == 0) {
            document.getElementById("asunto_error").textContent = "El campo asunto no debe estar vacío";
          } else {
            if (asunto.length > 50) {
              document.getElementById("asunto_error").textContent = "El asunto sólo soporta 50 caracteres.*"
            } else {
              document.getElementById("asunto_error").textContent = "";
              let mensaje = document.getElementById("mensaje").value;
              if (mensaje.length == 0) {
                document.getElementById("mensaje_error").textContent = "El mensaje no debe estar vacío";
              } else {
                if (mensaje.length > 300) {
                  document.getElementById("mensaje_error").textContent = "El mensaje debe contener máximo 300 caracteres";
                } else {
                  document.getElementById("mensaje_error").textContent = "";
                }
              }

              }
            }
            
          }
        }
      }
    }
  }

