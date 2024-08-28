function condicionesIniciales() {
    // Mensajes iniciales y estado predeterminado
    asignarTextoElemento('textoParaCambiar', 'Ningún mensaje fue encontrado');
    asignarTextoElemento('textoParaCambiar2', 'Ingresa el texto que desees encriptar o desencriptar.');
    document.querySelector('.presentacion_indicaciones_muñeco').style.display = 'block';
    document.getElementById("textoParaCambiar").style.display = 'block';
    document.getElementById("textoParaCambiar2").style.display = 'block';
    document.getElementById("botonCopiar").style.opacity = 0;
    //tamanoDePantalla();
}

function remplazarVocales(texto) {
    const conversiones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, function (match) {
        return conversiones[match];
    });
}

function revertirVocales(texto) {
    const conversiones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        return conversiones[match];
    });
}


/* let boton_encriptarTexto = document.getElementById("boton_encriptarTexto"); */

/* function tamanoDePantalla() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width <= 1440 & width > 769) {
        alert("La pantalla es de una monitor de PC.");
    } else if (width <= 768 && width > 376) {
        alert("La pantalla es de una tableta.");
    } else {
        alert("La pantalla es de un celular.");
    }
} */


function encriptarTexto() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoModificado = remplazarVocales(texto);
    document.getElementById("textoParaCambiar").innerText = textoModificado;
    let caja_texto = document.getElementById("caja_texto");

    let contenedorTextoParaCambiar = document.getElementById("contenedorTextoParaCambiar");

    let rectangulo = document.getElementById("rectangulo");//para la tableta

    document.getElementById("textoParaCambiar").style.display = 'block'; // Mostrar el texto encriptado
    document.getElementById("textoParaCambiar2").style.display = 'none'; // Ocultar el texto descriptivo
    document.querySelector('.presentacion_indicaciones_muñeco').style.display = 'none'; // Ocultar la imagen
    document.getElementById("botonCopiar").style.opacity = 1; // Mostrar el botón de copiar

    if (width <= 1440 && width > 769) {
        //alert("La pantalla es de un monitor.");
        caja_texto.classList.remove("presentacion_caja")
        caja_texto.classList.add("presentacion_caja2")
        contenedorTextoParaCambiar.classList.remove("presentacion_indicaciones"); //Se necesita
        contenedorTextoParaCambiar.classList.add("presentacion_indicaciones2");
        textoParaCambiar.classList.remove("presentacion_indicaciones_texto1");

        textoParaCambiar.classList.add("nuevo_lugar_del_texto");

        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_monitor");
    } else if (width <= 768 && width > 376) {
        //alert("La pantalla es de una tableta.");
        caja_texto.classList.remove("presentacion_caja")
        caja_texto.classList.add("presentacion_caja2")
        textoParaCambiar.classList.remove("presentacion_indicaciones_texto1");
        textoParaCambiar.classList.add("nuevo_lugar_del_texto");
        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_tableta");
    } else if (width <= 375 && width > 320) {
        caja_texto.classList.remove("presentacion_caja")
        caja_texto.classList.add("presentacion_caja2")
        textoParaCambiar.classList.remove("presentacion_indicaciones_texto1");
        textoParaCambiar.classList.add("nuevo_lugar_del_texto");
        contenedorTextoParaCambiar.classList.remove("presentacion_indicaciones"); //Se necesita
        contenedorTextoParaCambiar.classList.add("presentacion_indicaciones3");
        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_telefono");

    } 


}

function desencriptarTexto() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    let caja_texto = document.getElementById("caja_texto");
    let texto = document.getElementById("texto").value.toLowerCase();
    let contenedorTextoParaCambiar = document.getElementById("contenedorTextoParaCambiar");

    
    let textoModificado = revertirVocales(texto);
    document.getElementById("textoParaCambiar").innerText = textoModificado;

    document.getElementById("textoParaCambiar").style.display = 'block'; // Mostrar el texto desencriptado
    document.getElementById("textoParaCambiar2").style.display = 'none'; // Ocultar el texto descriptivo
    document.querySelector('.presentacion_indicaciones_muñeco').style.display = 'none'; // Ocultar la imagen
    document.getElementById("botonCopiar").style.opacity = 1; // Mostrar el botón de copiar

    if (width <= 1440 && width > 769) {
        caja_texto.classList.remove("presentacion_caja")
        caja_texto.classList.add("presentacion_caja2")
        contenedorTextoParaCambiar.classList.remove("presentacion_indicaciones"); //Se necesita
        contenedorTextoParaCambiar.classList.add("presentacion_indicaciones2");

        textoParaCambiar.classList.remove("presentacion_indicaciones_texto1");

        textoParaCambiar.classList.add("nuevo_lugar_del_texto");
        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_monitor");
    } else if (width <= 768 && width > 376) {
        //alert("La pantalla es de una tableta.");

        /*contenedorTextoParaCambiar.classList.remove("presentacion_indicaciones"); //Se necesita */

        textoParaCambiar.classList.remove("presentacion_indicaciones_texto1");
        textoParaCambiar.classList.add("nuevo_lugar_del_texto");
        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_tableta");
        height = 1384;
    } else if (width <= 375) {
        //alert("La pantalla es de un celular.");

        rectangulo.classList.remove("rectangulo");
        rectangulo.classList.add("rectangulo_telefono");
    } /* else {
        alert("Este dispositivo no cumple con nuestras medidas predeterminadas.");
    } */


}

function copiarTexto() {
    let texto = document.getElementById("textoParaCambiar").innerText;
    navigator.clipboard.writeText(texto).then(function () {
        alert('Texto copiado al portapapeles');
    }, function (err) {
        console.error('Error al copiar texto: ', err);
    });
}

function asignarTextoElemento(elemento, textoSinCambiar) {
    let elementoHTML = document.querySelector(`#${elemento}`);
    elementoHTML.innerHTML = textoSinCambiar;
    return;
}

$(document).ready(function () {
    condicionesIniciales();
});
