// Site JS Scripts 
$(function () {
    $("img.lazy").lazyload();
});
// external js: masonry.pkgd.js, imagesloaded.pkgd.js


$(document).ready(function () {

    $('.loadingDiv').animate({
        opacity: '1'
    });

    $('.loadingDiv').animate({


        rotation: 360
    }, {
        step: function (now, fx) {

            $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotateY(' + now + 'deg)');
            $(this).css('transform', 'rotateY(' + now + 'deg)');

        }
    }, 'easeInOutQuint');
    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        columnWidth: 200
      });
});
