mostrarFecha();

function mostrarFecha() {
    const fecha = new Date();
    //const fechaDiaSemana = fecha.getDay(); // 0 = Domingo
    const diaMes = fecha.getDate(); // 29
    //const mes = fecha.getMonth(); // 0 = Enero
    const anio = fecha.getFullYear(); // 2023
    const hora = fecha.getHours(); // 22:
    const minutos = fecha.getMinutes(); // :11
    const segundos = fecha.getSeconds(); // :.59
    
    const pD = fecha.getDay();
    let nombreDia = pD < 1 ? "domingo" : pD < 2 ? "lunes" : pD < 3 ? "martes" : pD < 4 ? "miércoles" : pD < 5 ? "jueves" : pD < 6 ? "viernes" : "sábado";
    const pM = fecha.getMonth();
    const nombreMes = pM < 1 ? "enero" : pM < 2 ? "febrero" : pM < 3 ? "marzo" : pM < 4 ? "abril" : pM < 5 ? "mayo" : pM < 6 ? "junio" : pM < 7 ? "julio" : pM < 8 ? "agosto" : pM < 9 ? "septiembre" : pM < 10 ? "octubre" : pM < 11 ? "noviembre" : "diciembre";

    alert("Hoy es " + nombreDia + ", " + diaMes + " de " + nombreMes + " de " + anio + ", \ny son las " + hora + " horas, " + minutos + " minutos con " + segundos + " segundos.");
}


setInterval('mostrar()', 1000);

function mostrar() {
    var fechaActual = new Date();
var ultimoDiaDelAnio = new Date(fechaActual.getFullYear(), 11, 31, 23, 59, 59);
var diferencia = ultimoDiaDelAnio - fechaActual;
var diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
var minutosRestantes = Math.floor((diferencia / 1000 / 60) % 60);
var segundosRestantes = Math.floor((diferencia / 1000) % 60);
var elementoTiempoRestante = document.getElementById("tiemporestante");
elementoTiempoRestante.innerHTML = "Quedan " + diasRestantes + " días, " + minutosRestantes + " minutos y " + segundosRestantes + " segundos para que termine el año.";
}