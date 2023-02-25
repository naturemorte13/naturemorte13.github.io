let menuVisible = false;
//función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
   var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
   if(distancia_skills>=300){
   let habilidades = document.getElementsByClassName("progreso");
   habilidades[0].classList.add("javascript");
   habilidades[1].classList.add("htmlcss");
   habilidades[2].classList.add("Photoshop");
   habilidades[3].classList.add("Ilustrator");
   habilidades[4].classList.add("wilcomembroidery");
   habilidades[5].classList.add("AutoCAD");
   habilidades[6].classList.add("Microsoftoffice");
   habilidades[7].classList.add("Comunicación");
   habilidades[8].classList.add("Trabajoenequipo");
   habilidades[9].classList.add("Creatividad");
   habilidades[10].classList.add("Dedicación");
   habilidades[11].classList.add("Capacidadparasolucionarproblemas");
}
}


//detector del scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
//Formulario
const form = document.getElementById("miFormulario");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const destinatario = "rolonkaren3@correo.com";
  const asunto = "Nuevo mensaje de contacto";
  const cuerpo = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

  const link = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
  window.location.href = link;

  alert("Tu mensaje ha sido enviado correctamente. ¡Gracias!");
});



