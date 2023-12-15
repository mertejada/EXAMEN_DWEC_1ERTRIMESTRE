/*4.Escriba una función que, dada una fecha, la devuelva con el siguiente formato:
“<Día_de_la_semana>, <día_del_mes> de <mes> del año de nuestro señor de <año>” */

function formatearFecha(fecha){
    let arrDiaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    let diaSemana = arrDiaSemana[fecha.getDay()];

    let arrMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let mes = arrMeses[fecha.getMonth()];

    return `${diaSemana}, ${fecha.getDate()} de ${mes} del año de nuestro señor de ${fecha.getFullYear()}. `;
}

let fecha = new Date(2023,11,15,20,20,0);

console.log(formatearFecha(fecha));