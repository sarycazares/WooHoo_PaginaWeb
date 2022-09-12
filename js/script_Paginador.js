
var contador = 20;

function pinta(num,inicio){
var pagNow = inicio;
var limSup;
var numPaginasFSt = "";
var DatoI;
var DatoF;
var pagAnt;
var pagSig;
var rutaIma="imagenes/";
var numPaginas = contador /num;
numPaginas = numPaginas.toString();
numPaginas = numPaginas.split(".");
numPaginasF = eval(numPaginas[0]);


    


	if (contador % num != 0){ 
		numPaginasF ++;
	}


	if((pagNow + 1) != numPaginasF){
		limSup = -1;
	} else {
		limSup = (contador - (numPaginasF * num))-1;
	} 

	DatoI = pagNow * num;
	DatoF = DatoI + (num+limSup);


	if (pagNow == 0){
		pagAnt = 0;
	} else {
		pagAnt = pagNow - 1;
	}
	if (pagNow == (numPaginasF-1)){
		pagSig = pagNow;
	} else {
		pagSig = pagNow + 1;
	}

	for (i=0;i<numPaginasF;i++){
		numPaginasFSt += "<a class='flecha' href='javascript:pinta("+ num +","+ i +"); flechaArriba();'>"+ (i+1) +"</a> ";
	}

	if (primera == 0){
		var creo = document.createElement("span");
		

        for (DatoI;DatoI<=DatoF;DatoI++){
        var div_grupopregunta=document.createElement('div');
		div_grupopregunta.setAttribute('class', 'grupo-pregunta');
        div_grupopregunta.setAttribute('id', 'grupo-pregunta_'+DatoI);
        var div_preguntafondo01=document.createElement('div');
		div_preguntafondo01.setAttribute('class', 'pregunta-fondo');

        var el_FechaHoraRespuesta=document.createElement('h5');
		el_FechaHoraRespuesta.setAttribute('class', 'FechaHora-Respuesta');
		el_FechaHoraRespuesta.setAttribute('id', 'FechaHora-Respuesta_'+DatoI);

        var el_EditadoRespuesta=document.createElement('h5');
		el_EditadoRespuesta.setAttribute('class', 'Editado-Respuesta');
		el_EditadoRespuesta.setAttribute('id', 'Editado-Respuesta_'+DatoI);

        var el_Perfil=document.createElement('a');
		el_Perfil.setAttribute('class', 'Perfil');
		el_Perfil.setAttribute('id', 'Perfil_'+i);
        el_Perfil.setAttribute('href', 'Pagina_Perfil.html');

        var el_FotoPerfil=document.createElement('img');
		el_FotoPerfil.setAttribute('class', 'Perfil-UsuarioPreguntaScrollImagen');
		el_FotoPerfil.setAttribute('id', 'FotoPerfil_'+DatoI);
        el_FotoPerfil.setAttribute('src', 'imagenes/fotos_perfil/gatico_01.jpg');

        var el_NombrePerfil=document.createElement('a');
		el_NombrePerfil.setAttribute('class', 'Perfil-UsuarioPreguntaScroll');
		el_NombrePerfil.setAttribute('id', 'NombrePerfil_'+DatoI);
        el_NombrePerfil.setAttribute('href', 'Pagina_Perfil.html');

        var el_PPregunta=document.createElement('h3');
		el_PPregunta.setAttribute('class', 'Pregunta:');
		el_PPregunta.setAttribute('id', 'Pregunta:_'+DatoI);

        var el_br01=document.createElement('br');

        //////////////////////////

        var div_textpregunta=document.createElement('div');
		div_textpregunta.setAttribute('class', 'text-pregunta');
        var el_br02=document.createElement('br');
        var el_br03=document.createElement('br');

        var el_PreguntaContenido=document.createElement('p');
		el_PreguntaContenido.setAttribute('class', 'PreguntaContenido');
		el_PreguntaContenido.setAttribute('id', 'PreguntaContenido_'+DatoI);

        var el_br04=document.createElement('br');
        var el_br05=document.createElement('br');

        //////////////////////////

        var div_preguntafondo02=document.createElement('div');
		div_preguntafondo02.setAttribute('class', 'pregunta-fondo');

        var el_VerMas=document.createElement('a');
		el_VerMas.setAttribute('class', 'vermas-pregunta');
		el_VerMas.setAttribute('id', 'VerMas_'+DatoI);
        el_VerMas.setAttribute('href', 'Pagina_PreguntaDesarrollada.html');
        var el_br06=document.createElement('br');
        var el_br07=document.createElement('br');


        /* /////////////////////////////////////////////////////// */

        var txt_FechaHora=document.createTextNode('26.05.2021');
		var txt_Editado=document.createTextNode('No Editado');
		var txt_NombrePerfil=document.createTextNode(DatoI);
        var txt_PreguntaUsuario=document.createTextNode('¿Lorem ipsum dolor sit amet consectetur adipisicing elit?');
		var txt_VerMas=document.createTextNode('Ver Mas');

        /* /////////////////////////////////////////////////////// */

        el_FechaHoraRespuesta.appendChild(txt_FechaHora);
		el_EditadoRespuesta.appendChild(txt_Editado);
		el_NombrePerfil.appendChild(txt_NombrePerfil);
		el_PreguntaContenido.appendChild(txt_PreguntaUsuario);
		el_VerMas.appendChild(txt_VerMas);

        /* /////////////////////////////////////////////////////// */

        el_Perfil.appendChild(el_FotoPerfil);

        div_preguntafondo01.appendChild(el_FechaHoraRespuesta);
        div_preguntafondo01.appendChild(el_EditadoRespuesta);
        div_preguntafondo01.appendChild(el_Perfil);
        div_preguntafondo01.appendChild(el_NombrePerfil);
        div_preguntafondo01.appendChild(el_PPregunta);
        div_preguntafondo01.appendChild(el_br01);

        div_textpregunta.appendChild(el_br02);
        div_textpregunta.appendChild(el_br03);
        div_textpregunta.appendChild(el_PreguntaContenido);
        div_textpregunta.appendChild(el_br04);
        div_textpregunta.appendChild(el_br05);

        div_preguntafondo02.appendChild(el_VerMas);
        div_preguntafondo02.appendChild(el_br06);
        div_preguntafondo02.appendChild(el_br07);


        div_grupopregunta.appendChild(div_preguntafondo01);
        div_grupopregunta.appendChild(div_textpregunta);
        div_grupopregunta.appendChild(div_preguntafondo02);


        document.getElementById("contenido").appendChild(div_grupopregunta);
        }

		var pagina = document.createElement("span");
		document.getElementById("paginacion").appendChild( pagina);
		paginacion.innerHTML += "<br><img class='flecha' alt='Primero' src='"+rutaIma+"left-arrow_doble.png' onclick='pinta("+ num +",0);flechaArriba();' style='cursor: pointer;'> "
			+"<img class='flecha' alt='Anterior' src='"+rutaIma+"left-arrow.png' onclick='pinta("+ num +","+ pagAnt +");flechaArriba();' style='cursor: pointer;'> "
			+ numPaginasFSt 
			+"<img class='flecha' alt='Siguiente' src='"+rutaIma+"right-arrow.png' onclick='pinta("+ num +","+ pagSig +");flechaArriba();'     style='cursor: pointer;'> "
			+"<img class='flecha' alt='Ultimo'    src='"+rutaIma+"right-arrow_doble.png' onclick='pinta("+ num +","+(numPaginasF-1)+");flechaArriba();' style='cursor: pointer;'> ";
		primera = 1;
	} else {
		borra();
		var creo = document.createElement("span");
		
        for (DatoI;DatoI<=DatoF;DatoI++){
            var div_grupopregunta=document.createElement('div');
            div_grupopregunta.setAttribute('class', 'grupo-pregunta');
            div_grupopregunta.setAttribute('id', 'grupo-pregunta_'+DatoI);
            var div_preguntafondo01=document.createElement('div');
            div_preguntafondo01.setAttribute('class', 'pregunta-fondo');
    
            var el_FechaHoraRespuesta=document.createElement('h5');
            el_FechaHoraRespuesta.setAttribute('class', 'FechaHora-Respuesta');
            el_FechaHoraRespuesta.setAttribute('id', 'FechaHora-Respuesta_'+DatoI);
    
            var el_EditadoRespuesta=document.createElement('h5');
            el_EditadoRespuesta.setAttribute('class', 'Editado-Respuesta');
            el_EditadoRespuesta.setAttribute('id', 'Editado-Respuesta_'+DatoI);
    
            var el_Perfil=document.createElement('a');
            el_Perfil.setAttribute('class', 'Perfil');
            el_Perfil.setAttribute('id', 'Perfil_'+i);
            el_Perfil.setAttribute('href', 'Pagina_Perfil.html');
    
            var el_FotoPerfil=document.createElement('img');
            el_FotoPerfil.setAttribute('class', 'Perfil-UsuarioPreguntaScrollImagen');
            el_FotoPerfil.setAttribute('id', 'FotoPerfil_'+DatoI);
            el_FotoPerfil.setAttribute('src', 'imagenes/fotos_perfil/gatico_01.jpg');
    
            var el_NombrePerfil=document.createElement('a');
            el_NombrePerfil.setAttribute('class', 'Perfil-UsuarioPreguntaScroll');
            el_NombrePerfil.setAttribute('id', 'NombrePerfil_'+DatoI);
            el_NombrePerfil.setAttribute('href', 'Pagina_Perfil.html');
    
            var el_PPregunta=document.createElement('h3');
            el_PPregunta.setAttribute('class', 'Pregunta:');
            el_PPregunta.setAttribute('id', 'Pregunta:_'+DatoI);
    
            var el_br01=document.createElement('br');
    
            //////////////////////////
    
            var div_textpregunta=document.createElement('div');
            div_textpregunta.setAttribute('class', 'text-pregunta');
            var el_br02=document.createElement('br');
            var el_br03=document.createElement('br');
    
            var el_PreguntaContenido=document.createElement('p');
            el_PreguntaContenido.setAttribute('class', 'PreguntaContenido');
            el_PreguntaContenido.setAttribute('id', 'PreguntaContenido_'+DatoI);
    
            var el_br04=document.createElement('br');
            var el_br05=document.createElement('br');
    
            //////////////////////////
    
            var div_preguntafondo02=document.createElement('div');
            div_preguntafondo02.setAttribute('class', 'pregunta-fondo');
    
            var el_VerMas=document.createElement('a');
            el_VerMas.setAttribute('class', 'vermas-pregunta');
            el_VerMas.setAttribute('id', 'VerMas_'+DatoI);
            el_VerMas.setAttribute('href', 'Pagina_PreguntaDesarrollada.html');
            var el_br06=document.createElement('br');
            var el_br07=document.createElement('br');
    
    
            /* /////////////////////////////////////////////////////// */
    
            var txt_FechaHora=document.createTextNode('26.05.2021');
            var txt_Editado=document.createTextNode('No Editado');
            var txt_NombrePerfil=document.createTextNode(DatoI);
            var txt_PreguntaUsuario=document.createTextNode('¿Lorem ipsum dolor sit amet consectetur adipisicing elit?');
            var txt_VerMas=document.createTextNode('Ver Mas');
    
            /* /////////////////////////////////////////////////////// */
    
            el_FechaHoraRespuesta.appendChild(txt_FechaHora);
            el_EditadoRespuesta.appendChild(txt_Editado);
            el_NombrePerfil.appendChild(txt_NombrePerfil);
            el_PreguntaContenido.appendChild(txt_PreguntaUsuario);
            el_VerMas.appendChild(txt_VerMas);
    
            /* /////////////////////////////////////////////////////// */
    
            el_Perfil.appendChild(el_FotoPerfil);
    
            div_preguntafondo01.appendChild(el_FechaHoraRespuesta);
            div_preguntafondo01.appendChild(el_EditadoRespuesta);
            div_preguntafondo01.appendChild(el_Perfil);
            div_preguntafondo01.appendChild(el_NombrePerfil);
            div_preguntafondo01.appendChild(el_PPregunta);
            div_preguntafondo01.appendChild(el_br01);
    
            div_textpregunta.appendChild(el_br02);
            div_textpregunta.appendChild(el_br03);
            div_textpregunta.appendChild(el_PreguntaContenido);
            div_textpregunta.appendChild(el_br04);
            div_textpregunta.appendChild(el_br05);
    
            div_preguntafondo02.appendChild(el_VerMas);
            div_preguntafondo02.appendChild(el_br06);
            div_preguntafondo02.appendChild(el_br07);
    
    
            div_grupopregunta.appendChild(div_preguntafondo01);
            div_grupopregunta.appendChild(div_textpregunta);
            div_grupopregunta.appendChild(div_preguntafondo02);
    
    
            document.getElementById("contenido").appendChild(div_grupopregunta);
            }
    



		var pagina = document.createElement("span");
		document.getElementById("paginacion").appendChild( pagina);
		paginacion.innerHTML += "<br><img class='flecha' alt='Primero' src='"+rutaIma+"left-arrow_doble.png' onclick='pinta("+ num +",0);flechaArriba()' style='cursor: pointer;'> "
			+"<img class='flecha' alt='Anterior' src='"+rutaIma+"left-arrow.png' onclick='pinta("+ num +","+ pagAnt +");flechaArriba();' style='cursor: pointer;'> "
			+ numPaginasFSt 
			+"<img class='flecha' alt='Siguiente' src='"+rutaIma+"right-arrow.png' onclick='pinta("+ num +","+ pagSig +");flechaArriba()'     style='cursor: pointer;'> "
			+"<img class='flecha' alt='Ultimo'    src='"+rutaIma+"right-arrow_doble.png' onclick='pinta("+ num +","+(numPaginasF-1)+");flechaArriba()' style='cursor: pointer;'> ";
	}
}

function borra(){

    //contenido02 = document.getElementById("contenido");
	contenido.innerHTML = "";
	paginacion.innerHTML = "";
}


function flechaArriba() {
    

        $('body,html').animate({    
            scrollTop: '200px'    
        },300);

    
}