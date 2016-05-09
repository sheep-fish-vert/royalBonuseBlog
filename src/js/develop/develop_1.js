/* header slider init */

    function headerSliderInit(){

        $('.flags-slider-wrap').slick({
            lazyLoad: 'ondemand',
            infinite:true,
            slidesToShow:3,
            slidesToScroll:1,
            dots:false
        });

    }

/* /header slider init */

/* header menu nav toogle & header-list index */

    function toogleHeaderNav(){

        /* nav toggle */

            $('.header-bottom li').hover(
                function(){
                    $(this).find('ul').stop().slideDown(300);
                },
                function(){
                    $(this).find('ul').stop().slideUp(300);
                }
            );

        /* /nav toggle */

        /* z-index */

            var navLength = $('.header-bottom nav>ul>li').length;

            $('.header-bottom nav>ul>li').each(function(){
                $(this).css({'z-index':navLength});
                navLength--;
            });

        /* /z-index */

    };

/* header menu nav toggle & header-list index */

/* footer adaptation */

function footerAdaptation(){

    function listWrapHeight(){

        $('.footer-top').removeAttr('style');

        if($(window).width()<=768 && $(window).width()>640){

            var arr = [];

            $('.footer-list-wrap').each(function(){

                arr.push($(this).outerHeight());

            });

            var maxHeight = Math.max.apply(Math, arr);

            $('.footer-top').css({'height':maxHeight+'px'});
        }
        else if($(window).width()<=640){
            $('.footer-top').height($('.footer-top').height()/1.5);
        }

        $('.footer_placeholder').height($('.footer').outerHeight());

    }

    listWrapHeight();

    $(window).load(function(){

        listWrapHeight();

    });

    $(window).resize(function(){

        listWrapHeight();

    });

};

/* /footer adaptation */


$(document).ready(function(){

    footerAdaptation();

});

$(window).load(function(){

    headerSliderInit();
    toogleHeaderNav();

});

$(window).resize(function(){

});