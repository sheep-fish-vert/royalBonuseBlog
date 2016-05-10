

function rightColumnSlider(){

    $('.right-column .item').each(function(index, el) {
        var tabItem = $(this).find('.tabItem');
        var that = $(this);
        tabItem.each(function(index, el) {
            var sliderItem = $(this).find('.slider-item');
            var itemwrap = $(this).children('.tabItem-wrap');
            if( sliderItem.length > 1 ){
                itemwrap.on('init', function(event, slick, direction){
                    setTimeout(function(){
                        columnTab();//tabs
                    },1000);
                });
                itemwrap.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    adaptiveHeight:true
                });
            }
        });
        function columnTab(){
            tabItem.not(':first').addClass('hide');
            that.find('.wrapper .tab').click(function(){
                that.find('.wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
                tabItem.addClass('hide').eq($(this).index()).removeClass('hide');
            }).eq(0).addClass('active');
        }
    });
}

$(document).ready(function(){
    rightColumnSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
