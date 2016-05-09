function columnTab(){
    $('.right-column .tabItem').not(':first').hide();
    $('.right-column .wrapper .tab').click(function(){
        $('.right-column .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.right-column .tabItem').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
}


$(document).ready(function(){
    columnTab();
});

$(window).load(function(){

});

$(window).resize(function(){

});
