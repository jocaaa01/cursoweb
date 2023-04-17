
var dia;

switch (new Date().getDay()) {

case 0:

dia = "Domingo"; break;

case 1:

dia = "Lunes"; break;

case 2:

dia = "Martes"; break;

case 3:

dia = "Miércoles"; break;

case 4:

dia = "Jueves"; break;

case 5:

dia = "Viernes"; break;

case 6:

dia = "Sábado";

}

document.getElementById("text").innerHTML = "Hoy es " + dia;
var mes;

switch (new Date().getMonth()) {

    case 0:

        mes = "enero"; break;

    case 1:

        mes = "febrero"; break;

    case 2:

        mes = "Marzo"; break;

    case 3:

        mes = "Abril"; break;

    case 4:

        mes = "Mayo"; break;

    case 5:

        mes = "Junio"; break;

    case 6:

        mes = "julio"; break;

    case 7:

        mes = "Agosto"; break;

    case 8:

        mes = "Septiembre"; break;

    case 9:

        mes = "octubre"; break;

    case 10:

        mes = "Noviembre"; break;

    case 11:

        mes = "Diciembre";

}

document.getElementById("texto").innerHTML = "Estamos en " + mes;

