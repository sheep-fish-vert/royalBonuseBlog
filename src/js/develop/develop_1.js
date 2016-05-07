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

/* header menu nav toogle */

    function toogleHeaderNav(){

        $('.header-bottom li').hover(
            function(){
                $(this).find('ul').stop().slideDown(300);
            },
            function(){
                $(this).find('ul').stop().slideUp(300);
            }
        );

    };

/* header menu nav toggle */


$(document).ready(function(){

});

$(window).load(function(){

    headerSliderInit();
    toogleHeaderNav();

});

$(window).resize(function(){

});