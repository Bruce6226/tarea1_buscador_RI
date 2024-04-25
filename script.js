
var palabrasDelTextoFrankenstein;
var palabrasDelTextoMoby;
var palabrasDelTextoRomeoJuliet;
var palabrasDelTextoPridePrejuice;
var palabrasDelTextoSirDaniel;
function cargarLibros() {
    const rutaArchivoFrankenstein = 'week01/data/Frankenstein.txt';
    fetch(rutaArchivoFrankenstein).then(response => { return response.text(); }).then(texto => {
        palabrasDelTextoFrankenstein = texto.split(/\s+|\n/);
    })
    const rutaArchivoMoby = 'week01/data/Moby Dick.txt';
    fetch(rutaArchivoMoby).then(response => { return response.text(); }).then(texto => {
        palabrasDelTextoMoby = texto.split(/\s+|\n/);
    })
    const rutaArchivoPridePrejuice = 'week01/data/Pride and Prejudice.txt';
    fetch(rutaArchivoPridePrejuice).then(response => { return response.text(); }).then(texto => {
        palabrasDelTextoPridePrejuice = texto.split(/\s+|\n/);
    })
    const rutaArchivoRomeoJuliet = 'week01/data/Romeo and Juliet.txt';
    fetch(rutaArchivoRomeoJuliet).then(response => { return response.text(); }).then(texto => {
        palabrasDelTextoRomeoJuliet = texto.split(/\s+|\n/);
    })
    const rutaArchivoSirDaniel = 'week01/data/Sir Daniel Wilson.txt';
    fetch(rutaArchivoSirDaniel).then(response => { return response.text(); }).then(texto => {
        palabrasDelTextoSirDaniel = texto.split(/\s+|\n/);
    })
    console.log('Libros cargados')
}
document.addEventListener('DOMContentLoaded', function () {
    cargarLibros();
});
function alEscribir() {
    var contenedorGeneral = document.getElementById("cardGeneral");
    var contenedorFrankenstein = document.getElementById("cardFrankenstein");
    var contenedorMoby = document.getElementById("cardMoby");
    var contenedorPridePrejuice = document.getElementById("cardPridePrejuice");
    var contenedorRomeoJuliet = document.getElementById("cardRomeoJuliet");
    var contenedorSirDaniel = document.getElementById("cardSirDaniel");
    var palabra = document.getElementById("inputTexto").value;
    contenedorGeneral.innerText = 'Buscando ....'
    setTimeout(function () {
        cantidadPalabrasTotales = 0
        buscar('Frankenstein', palabrasDelTextoFrankenstein, palabra, contenedorFrankenstein);
        buscar('Moby', palabrasDelTextoMoby, palabra, contenedorMoby);
        buscar('PridePrejuice', palabrasDelTextoPridePrejuice, palabra, contenedorPridePrejuice);
        buscar('RomeoJuliet', palabrasDelTextoRomeoJuliet, palabra, contenedorRomeoJuliet);
        buscar('SirDaniel', palabrasDelTextoSirDaniel, palabra, contenedorSirDaniel);
        if (cantidadPalabrasTotales === 0) {
            contenedorGeneral.innerText = 'No se encontro la palabra'
        }
        console.log(cantidadPalabrasTotales)
        if (cantidadPalabrasTotales === 0) {
            contenedorGeneral.innerText = 'No se encontro la palabra'
        }else{
            contenedorGeneral.innerText = ''
        }
        cantidadPalabrasTotales = 0
    }, 1000);
}
var cantidadPalabrasTotales = 0;
function buscar(nombreLibro, palabrasDelTexto, palabra, contenedor) {
    if (palabra) {
        palabra = palabra.toLowerCase()
        var cantidadPalbrasDelTexto = 0;
        for (var palabraDelTexto of palabrasDelTexto) {
            palabraDelTexto = palabraDelTexto.toLowerCase()
            if (palabraDelTexto.trim() === palabra.trim()) {
                cantidadPalbrasDelTexto = cantidadPalbrasDelTexto + 1;
                cantidadPalabrasTotales = cantidadPalabrasTotales + 1;
            }
        }
        if (cantidadPalbrasDelTexto > 0) {
            if (cantidadPalbrasDelTexto > 1) {
                contenedor.innerText = `La palabra "${palabra}" fue encontrada en el libro ${nombreLibro} ${cantidadPalbrasDelTexto} veces.`;
            } else {
                contenedor.innerText = `La palabra "${palabra}" fue encontrada en el libro ${nombreLibro} una vez.`;
            }
        } else {
            contenedor.innerText = ``;
        }
    } else {
        contenedor.innerText = ``;
    }
}