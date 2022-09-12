var contador = 0;
var imagenes = new Array();
 
$(document).ready(function() {
    var numImages = 9;
    if (numImages <= 2) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }
 
    $('.left-arrow').on('click',function() {
        if (contador > 0) {
            contador = contador - 1;
        } else {
            contador = numImages - 2;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+contador).position().left)}, 750);
 
        return false;
    });
 
    $('.left-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.right-arrow').on('click', function() {
        if (numImages > contador + 2) {
            contador = contador+1;
        } else {
            contador = 0;
        }
 
        $(".carrusel").animate({"left": -($('#product_'+contador).position().left)}, 750);
 
        return false;
    }); 
 });