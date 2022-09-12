
var contraseñaClick = 0;

$(document).ready(function() {



    var fechaDay=document.querySelector("#fecha-nacimiento");   
    var hoy = new Date();

    var mes = hoy.getMonth()+1;
    if(mes == 0 || mes == 1 || mes == 2 || mes == 3 ||
        mes == 4 || mes == 5 || mes == 6 || mes == 7 ||
        mes == 8 || mes == 9){
            mes = '0' + mes;
    }

    var fecha =hoy.getFullYear() + '-' + mes +'-'+hoy.getDate();
    fechaDay.setAttribute('max', fecha);


    ///////////////////////////////////////////////

    //var Contraseña=document.querySelector("#contraseña"); 
    //if(Contraseña.length <= 8){
	//	alert(" Por lo menos 8 caracteres, Una letra mayúscula, Una letra minúscula, un número y Un signo de puntuación");
    //}




});

function ContraseñaOnclick(){

    if (contraseñaClick == 0){
    alert(" La contraseña tiene que seguir el ORDEN de 3 LETRAS MAYUSCULAS, 3 LETRAS MINUSCULAS, 1 NÚMERO y 1 CARACTER ESPECIAL de estos !#$%&/()=?*");
    contraseñaClick = 1;
}
}