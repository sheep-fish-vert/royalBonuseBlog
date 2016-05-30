$(document).ready(function(){

    $('select[name=search_select]').on('change', function(){
        
        window.location = $(this).val();
        
    });
    
});

$(window).load(function(){

});

$(window).resize(function(){

});