function respuesta(opcion){

let resultado=document.getElementById("resultado");

if(opcion=="b"){
resultado.innerHTML="✅ ¡Correcto! CSS da el diseño a una página web.";
resultado.style.color="green";
}else{
resultado.innerHTML="❌ Respuesta incorrecta. La respuesta correcta es CSS.";
resultado.style.color="red";
}

}