
jQuery(document).ready(function ($) {

    var offsetScroll = 100;
    var aArray = getHrefs();
 

    $(window).resize(function () {
        var viewportWidth = $(window).width();

        if ( viewportWidth > 768){
            offsetScroll = 160;
        } else{
            offsetScroll = 100;
        } 
        console.log(offsetScroll);
    });

    
     /* Animation Controls */
    function siteAnimations(){      
        $('.loadingDiv').animate({
            opacity: '1',
            rotation: 720
        }, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotateZ(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotateZ(' + now + 'deg)');
                $(this).css('transform', 'rotateZ(' + now + 'deg)');
            }
        }, 'easeInOutQuint');

        $("body").show();
        $('#loading').delay(1000).fadeOut();
        $('main').delay(2000).fadeIn(2000);
        $('.header').delay(900).animate({
            top: "50%",
            opacity: "1"
        }, 1000);
        $('.coming-soon-text').delay(2000).animate({
            opacity: "1",
        }, 1500);
    }


   
    /* Nav css and scroll controls */
    $("nav a, .arrow-down").click(function (evn) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, { offset: -(offsetScroll) });
    });

    function getHrefs() {
        var aChildren = $("nav li").children();
        var aArrayRefs = [];
        for (var i = 0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArrayRefs.push(ahref);
        }
        return aArrayRefs;
    };

    function scrollClasses() {
        var windowTop = $(window).scrollTop();
        var navTop = $('#nav-anchor').offset().top;
        if (windowTop > navTop) {
            $('#content').addClass('extraspace');
            $('nav').addClass('stick');
        } else {
            $('#content').removeClass('extraspace');
            $('nav').removeClass('stick');
        }
    }

    function navHighlights(){

        /*I CAN FIGURE THIS OUT!! */
        var windowPos = $(window).scrollTop() + offsetScroll; 
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        var navTop = $('.main-nav').height();

        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPosid = $(theID);
            if (!divPosid.length) {
                return;
            }
            var divPos = parseInt(divPosid.offset().top);
            var divHeight = $(theID).height();
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
    }

    siteAnimations();

    $(window).scroll(function () {
        scrollClasses();
        navHighlights();
    });

});

