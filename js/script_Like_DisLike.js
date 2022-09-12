
/*
const seleccionArchivos=document.querySelector("#imagenPrevisualizacion");

$(document).ready(function() {

 
    
$('#LikeDislike').on('click',function(){
    $('#LikeDislike')[0].classList.toggle("fa-thumbs-down");
});
    


});
*/


function funcionLikeDislike(x){
    x.classList.toggle("fa-thumbs-down");
};


function funcioniconLike(x){
   
    const archivos = x.classList;
    const archivos01 ="imagen-iconoLike off";

    if (archivos == archivos01){
    x.src="imagenes/iconos/like-solid.png"
    x.classList="imagen-iconoLike on";
    } else{
        x.src="imagenes/iconos/like.png"
        x.classList="imagen-iconoLike off";
    }


};

function funcioniconDislike(x){
   
    const archivos = x.classList;
    const archivos01 ="imagen-iconoDislike off";

    if (archivos == archivos01){
    x.src="imagenes/iconos/dislike-solid.png"
    x.classList="imagen-iconoDislike on";
    } else{
        x.src="imagenes/iconos/dislike.png"
        x.classList="imagen-iconoDislike off";
    }


};

function funcioniconLikeDislike(x){

    const archivos = x.className;
    const LikeOffOff = "imagen-iconoLike offoff";
    const LikeOnOn = "imagen-iconoLike onon";
    const LikeOffOn = "imagen-iconoLike offon";
    const DislikeOffOff = "imagen-iconoDislike offoff";
    const DislikeOnOn = "imagen-iconoDislike onon";
    const DislikeOffOn = "imagen-iconoDislike offon";

    var contador = 0;
    var LikeID= "Like_"+contador;
    var DislikeID= "Dislike_"+contador;

    if(LikeOffOff ==  x.className|| LikeOnOn ==  x.className|| LikeOffOn ==  x.className){
    while(LikeID != x.id){
        contador = contador + 1;
        LikeID= "Like_"+contador;
        
    }
}

if(DislikeOffOff ==  x.className|| DislikeOnOn ==  x.className|| DislikeOffOn ==  x.className){
    while(DislikeID != x.id){
        contador = contador + 1;
        DislikeID= "Dislike_"+contador;
        
    }
}

$Like= document.querySelector("#Like_"+contador);
$Dislike= document.querySelector("#Dislike_" +contador);

    switch (archivos) {
        case "imagen-iconoLike offoff":
            x.src="imagenes/iconos/like-solid.png";
            x.classList="imagen-iconoLike onon";
            $Dislike.src="imagenes/iconos/dislike.png";
            $Dislike.classList="imagen-iconoDislike offoff";

          break;
        case "imagen-iconoLike onon":
            x.src="imagenes/iconos/like.png";
            x.classList="imagen-iconoLike offoff";
         
          break;
        case "imagen-iconoDislike offoff":
            x.src="imagenes/iconos/dislike-solid.png"
            x.classList="imagen-iconoDislike onon";
            $Like.src="imagenes/iconos/like.png";
            $Like.classList="imagen-iconoLike offoff";
         
          break;
        case "imagen-iconoDislike onon":
            x.src="imagenes/iconos/dislike.png";
            x.classList="imagen-iconoDislike offoff";
         
          break;
        default:
          break;
      }


}

function funcioniconFavorite(x){
   
    const archivos = x.classList;
    const archivos01 ="imagen-iconoStar off";

    if (archivos == archivos01){
    x.src="imagenes/iconos/star-solid.png"
    x.classList="imagen-iconoStar on";
    } else{
        x.src="imagenes/iconos/star.png"
        x.classList="imagen-iconoStar off";
    }


};

function funcioniconPregunta(x){
   
    const archivos = x.classList;
    const archivos01 ="imagen-iconoPregunta off";

    if (archivos == archivos01){
    x.src="imagenes/iconos/star-solid.png"
    x.classList="imagen-iconoPregunta on";
    } else{
        x.src="imagenes/iconos/star.png"
        x.classList="imagen-iconoPregunta off";
    }


};

function funcionLikeDislikePregunta(x){
    
    const archivos = x.className;
    const LikeOffOff = "imagen-iconoLike offoff";
    const LikeOnOn = "imagen-iconoLike onon";
    const LikeOffOn = "imagen-iconoLike offon";
    const DislikeOffOff = "imagen-iconoDislike offoff";
    const DislikeOnOn = "imagen-iconoDislike onon";
    const DislikeOffOn = "imagen-iconoDislike offon";

    var contador = 0;
    var LikeID= "LikeP_"+contador;
    var DislikeID= "DislikeP_"+contador;

    if(LikeOffOff ==  x.className|| LikeOnOn ==  x.className|| LikeOffOn ==  x.className){
    while(LikeID != x.id){
        contador = contador + 1;
        LikeID= "LikeP_"+contador;
        
    }
}

if(DislikeOffOff ==  x.className|| DislikeOnOn ==  x.className|| DislikeOffOn ==  x.className){
    while(DislikeID != x.id){
        contador = contador + 1;
        DislikeID= "DislikeP_"+contador;
        
    }
}

$Like= document.querySelector("#LikeP_"+contador);
$Dislike= document.querySelector("#DislikeP_" +contador);

    switch (archivos) {
        case "imagen-iconoLike offoff":
            x.src="imagenes/iconos/like-solid.png";
            x.classList="imagen-iconoLike onon";
            $Dislike.src="imagenes/iconos/dislike.png";
            $Dislike.classList="imagen-iconoDislike offoff";

          break;
        case "imagen-iconoLike onon":
            x.src="imagenes/iconos/like.png";
            x.classList="imagen-iconoLike offoff";
         
          break;
        case "imagen-iconoDislike offoff":
            x.src="imagenes/iconos/dislike-solid.png"
            x.classList="imagen-iconoDislike onon";
            $Like.src="imagenes/iconos/like.png";
            $Like.classList="imagen-iconoLike offoff";
         
          break;
        case "imagen-iconoDislike onon":
            x.src="imagenes/iconos/dislike.png";
            x.classList="imagen-iconoDislike offoff";
         
          break;
        default:
          break;
      }


}