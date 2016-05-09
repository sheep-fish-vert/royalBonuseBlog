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


$(document).ready(function(){

});

$(window).load(function(){

    headerSliderInit();
    toogleHeaderNav();

});

$(window).resize(function(){

});