


$(document).ready(function() {
    $('.botonabrir').on('click',function(){
        $('.fondo_transparente')[0].style.display="block" 
    return false
});

 
$('.modal_cerrar').on('click',function(){
    $('.fondo_transparente')[0].style.display="none" 
});

$('#modal_cancelar').on('click',function(){
    $('.fondo_transparente')[0].style.display="none" 
});

});