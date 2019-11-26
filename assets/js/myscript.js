
jQuery(document).ready(function ($) {
    // Defining a function to set size for #hero 
    function fullscreen() {
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

    fullscreen();

    // Run the function in case of window resize
    jQuery(window).resize(function () {
        fullscreen();
    });

    (function () {
        var v = document.getElementsByClassName("youtube-player");
        for (var n = 0; n < v.length; n++) {
            var p = document.createElement("div");
            p.innerHTML = labnolThumb(v[n].dataset.id);
            p.onclick = labnolIframe;
            v[n].appendChild(p);
        }
    })();

    function labnolThumb(id) {
        return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "youtube-iframe");
        this.parentNode.replaceChild(iframe, this);
    }




    jQuery(document).ready(function () {
        jQuery("body").show();

    });

    // window.REMODAL_GLOBALS = {
    //   NAMESPACE: 'remodal',
    //   DEFAULTS: {
    //     hashTracking: true,
    //     closeOnConfirm: true,
    //     closeOnCancel: true,
    //     closeOnEscape: true,
    //     closeOnOutsideClick: true,
    //     modifier: ''
    //   }
    // };

    $(document).ready(function () {

    });




    $(window).ready(function () {
        $('#loading').delay(1500).fadeOut();
        $('main').delay(2000).fadeIn(2000);
        $('.header').delay(1500).animate({
            top: "50%",
        }, 1000);
        $('.coming-soon-text').delay(1500).animate({
            opacity: "1",
        }, 1500);



    });
    $(document).ready(function () {
        var classCycle = ['imageCycle1', 'imageCycle2', 'imageCycle3', 'imageCycle4'];

        var randomNumber = Math.floor(Math.random() * classCycle.length);
        var classToAdd = classCycle[randomNumber];

        $('#hero').addClass(classToAdd);

    });


    $(document).on('closing', '.remodal', function (e) {
        $("iframe").each(function () {
            var src = $(this).attr('src');
            $(this).attr('src', src);
        });

    });

    $(document).ready(function () {

        /** 
         * This part does the "fixed navigation after scroll" functionality
         * We use the jQuery function scroll() to recalculate our variables as the 
         * page is scrolled/
         */
        $(window).scroll(function () {
            var window_top = $(window).scrollTop(); // the "12" should equal the margin-top value for nav.stick
            var div_top = $('#nav-anchor').offset().top;


            if (window_top > div_top) {

                $('nav').addClass('stick');
                $('#content').addClass('extraspace');
                $('#design h2').addClass('main-header-space');


            } else {
                $('nav').removeClass('stick');
                $('#content').removeClass('extraspace');
                $('#design h2').removeClass('main-header-space');

            }
        });

        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function (evn) {
            evn.preventDefault();

            $('html,body').scrollTo(this.hash, this.hash, { offset: -80});
        });
        $(".arrow-down").click(function (evn) {
            evn.preventDefault();

            $('html,body').scrollTo(this.hash, this.hash, { offset: -80 });
        });


        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i = 0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function () {
            var windowPos = $(window).scrollTop() + 53; // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPosid = $(theID);
                if (!divPosid.length) {
                    return;
                }
                var divPos = divPosid.offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }

            if (windowPos + windowHeight === docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });
    });

    $.extend($.scrollTo.defaults, {

    });
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

});

