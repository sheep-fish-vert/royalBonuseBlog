


$(document).ready(function(){

    $('select[name=search_select]').on('change', function(){
        
        $(this).closest('form').submit();
    /*
        var thisForm = $(this).closest('form');
        var formSur = thisForm.serialize();
        

        $.ajax({
            url : thisForm.attr('action'),
            data: formSur,
            method:'POST',
            success : function(data){
               
                if ( data.trim() == 'true') {
                    thisForm.trigger("reset");
                    popNext("#call_success", "call-popup");
                }
                else {
                thisForm.trigger('reset');
                }
               

            }
        });
    */
        
    });
    
});

$(window).load(function(){

});

$(window).resize(function(){

});