
var contador = 10;
var i;

function ComentariosYaPuestos(){

    contador = contador -1;
    for (i = 0; i <= contador; i++){

        var div_respuesta=document.createElement('div');
		var div_gruporespuestaUsuario=document.createElement('div');
		div_gruporespuestaUsuario.setAttribute('class', 'grupoRespuesta usuario');

		var div_gruporespuestaP=document.createElement('div');
		div_gruporespuestaP.setAttribute('class', 'grupoRespuesta p');

		var div_gruporespuestaImg=document.createElement('div');
		div_gruporespuestaImg.setAttribute('class', 'grupoRespuesta imagen');

		var div_gruporespuestaReacciones=document.createElement('div');
		div_gruporespuestaReacciones.setAttribute('class', 'grupoRespuesta Reacciones');

		var div_grupoModificarRespuesta=document.createElement('div');
		div_grupoModificarRespuesta.setAttribute('class', 'grupoRespuesta modificarRespuesta');



       /* /////////////////////////////////////////////////////// */


		var el_usuario=document.createElement('a');
		el_usuario.setAttribute('class', 'titulo-usuarioRespuesta');
		el_usuario.setAttribute('href', 'Pagina_Perfil.html');
		var el_aimagenUsuario=document.createElement('a');
		el_aimagenUsuario.setAttribute('class', 'aimagen-usuario');
		el_aimagenUsuario.setAttribute('href', 'Pagina_Perfil.html');
		var el_imagenUsuario=document.createElement('img');
		el_imagenUsuario.setAttribute('class', 'imagen-usuario');
		el_imagenUsuario.src="imagenes/fotos_perfil/gatico_01.jpg";

		var el_respuesta=document.createElement('p');
		el_respuesta.setAttribute('class', 'respuesta-usuarioRespuesta');
		var el_line=document.createElement('hr');
		el_line.setAttribute('class', 'hr-usuarioRespuesta');

		var el_modrespuesta=document.createElement('a');
		el_modrespuesta.setAttribute('class', 'Modificar-usuarioRespuesta');
		el_modrespuesta.setAttribute('href', 'Pagina_ModificarRespuesta.html');

		var el_FechaHora=document.createElement('h4');
		el_FechaHora.setAttribute('class', 'FechaHora-Respuesta');
		var el_Editado=document.createElement('h4');
		el_Editado.setAttribute('class', 'Editado-Respuesta');

		var el_imagen=document.createElement('img');
		el_imagen.setAttribute('class', 'imagen-respuesta');

		var el_icon01=document.createElement('img');
		el_icon01.setAttribute('class', 'imagen-iconoLike offoff');
		el_icon01.setAttribute('id', 'Like_'+i);
		el_icon01.setAttribute('onclick', 'funcioniconLikeDislike(this)');
		el_icon01.src="imagenes/iconos/like.png";

		var el_icon03=document.createElement('img');
		el_icon03.setAttribute('class', 'imagen-iconoDislike offoff');
		el_icon03.setAttribute('id', 'Dislike_'+i);
		el_icon03.setAttribute('onclick', 'funcioniconLikeDislike(this)');
		el_icon03.src="imagenes/iconos/dislike.png";

		var el_icon02=document.createElement('img');
		el_icon02.setAttribute('class', 'imagen-iconoStar off');
		el_icon02.setAttribute('id', 'starFavorite_'+i);
		el_icon02.setAttribute('onclick', 'funcioniconFavorite(this)');
		el_icon02.src="imagenes/iconos/star.png";

		/* /////////////////////////////////////////////////////// */

		var txt_usuario=document.createTextNode(i);
		var txt_respuesta=document.createTextNode("comment");
		var txt_modificarrespuesta=document.createTextNode('Modificar Respuesta');
		var txt_FechaHora=document.createTextNode(formatoFecha());
		var txt_Editado=document.createTextNode('No Editado');


	  
		el_imagen.src= imagenPrevisualizacion02.src;



		el_usuario.appendChild(txt_usuario);
		el_respuesta.appendChild(txt_respuesta);
		el_modrespuesta.appendChild(txt_modificarrespuesta);
		el_FechaHora.appendChild(txt_FechaHora);
		el_Editado.appendChild(txt_Editado);
		el_line.style.border='1px solid #49408C';

		/* /////////////////////////////////////////////////////// */

		el_aimagenUsuario.appendChild(el_imagenUsuario);
		div_gruporespuestaUsuario.appendChild(el_Editado);
		div_gruporespuestaUsuario.appendChild(el_Editado);
		div_gruporespuestaUsuario.appendChild(el_FechaHora);
		div_gruporespuestaUsuario.appendChild(el_aimagenUsuario);
		div_gruporespuestaUsuario.appendChild(el_usuario);
		div_gruporespuestaUsuario.appendChild(el_line);

		div_gruporespuestaP.appendChild(el_respuesta);

		div_gruporespuestaImg.appendChild(el_imagen);

		div_gruporespuestaReacciones.appendChild(el_icon01);
		div_gruporespuestaReacciones.appendChild(el_icon03);
		div_gruporespuestaReacciones.appendChild(el_icon02);
		div_grupoModificarRespuesta.appendChild(el_modrespuesta);
		

        /* /////////////////////////////////////////////////////// */
 
		div_respuesta.setAttribute('class', 'respuesta Contenedor_'+i);
		div_respuesta.appendChild(div_gruporespuestaUsuario);
		div_respuesta.appendChild(div_gruporespuestaP);
		div_respuesta.appendChild(div_gruporespuestaImg);
		div_respuesta.appendChild(div_gruporespuestaReacciones);
		div_respuesta.appendChild(div_grupoModificarRespuesta);
		document.getElementById('result').appendChild(div_respuesta);
    }
}