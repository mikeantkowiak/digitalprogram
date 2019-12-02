
jQuery(document).ready(function ($) {

    $('.loadingDiv').animate({
        opacity: '1',
        rotation: 720
    },{
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotateZ(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotateZ(' + now + 'deg)');
            $(this).css('transform', 'rotateZ(' + now + 'deg)');
        }
    }, 'easeInOutQuint');

    jQuery("body").show();

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

    $(window).ready(function () {
        // this can be reworked to use css animate
        $('#loading').delay(1000).fadeOut();
        $('main').delay(2000).fadeIn(2000);
        $('.header').delay(900).animate({
            top: "50%",
            opacity: "1"
        }, 1000);
        $('.coming-soon-text').delay(2000).animate({
            opacity: "1",
        }, 1500);
    });
    /** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    $(window).scroll(function () {
        var windowTop = $(window).scrollTop(); // the "12" should equal the margin-top value for nav.stick
        var navTop = $('#nav-anchor').offset().top;

        if (windowTop > navTop) {
            $('#content').addClass('extraspace');
            $('nav').addClass('stick');
        } else {
            $('#content').removeClass('extraspace');
            $('nav').removeClass('stick');
        }
    });
    var offsetScroll = 160;
    /**
     * This part causes smooth scrolling using scrollto.js
     */
    $("nav a").click(function (evn) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, { offset: -offsetScroll});
    });
    $(".arrow-down").click(function (evn) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, { offset: -offsetScroll });
    });

    /**
     * This part handles the highlighting functionality.
     */
    var aChildren = $("nav li").children();
    var aArray = [];

    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

    $(window).scroll(function () {
        var windowPos = $(window).scrollTop() + offsetScroll; // get the offset of the window from the top of page
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

