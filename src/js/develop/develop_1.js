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


$(document).ready(function(){

});

$(window).load(function(){

    headerSliderInit();

});

$(window).resize(function(){

});