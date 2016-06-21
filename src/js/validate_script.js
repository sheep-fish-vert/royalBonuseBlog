/*валидация формы*/
function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form-input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form-row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form-row').is('.error')){
                    $(element).closest('.form-row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }

        $('[type="password"]',$form).each(function(){
            if($(this).is("#re_password") == true){
                $(this).rules("add", {
                    minlength:3,
                    equalTo:"#password",
                    messages:{
                        equalTo:"Неверный пароль.",
                        minlength:"Недостаточно символов."
                    }
                });
            }
        })
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form){

  var thisForm = $(form);
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
}

/* Отправка формы с файлом */
/* не использовать input[type="file"] в форме и не забыть дописать форме enctype="multipart/form-data" */
function validationCallDocument(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    formData.append('file', thisForm.find('input[type=file]')[0].files[0]);

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}

/* Отправка формы с файлaми */
/* не использовать input[type="file"] в форме и не забыть дописать форме enctype="multipart/form-data" */
function validationCallDocuments(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    $.each(thisForm.find('input[type="file"]')[0].files, function(index, file){
        formData.append('file['+index+']', file);
    });

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}

function popNext(popupId, popupWrap){

    $.fancybox.open(popupId,{
        padding:0,
        fitToView:false,
        wrapCSS:popupWrap,
        autoSize:true,
        afterClose: function(){
            $('form').trigger("reset");
            clearTimeout(timer);
        }
    });

    var timer = null;

    timer = setTimeout(function(){
        $('form').trigger("reset");
        $.fancybox.close(popupId);
    },2000);

}


/*маска на инпуте*/
function Maskedinput(){
    if($('.tel-mask')){
        $('.tel-mask').mask('+9 (999) 999-99-99');
    }
}

/*fansybox на форме*/
function fancyboxForm(){
  $('.fancybox-form').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoResize:true,
    wrapCSS:'fancybox-form',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  })
}

//ajax func for programmer

function someAjax(item, someUrl, successFunc, someData){

    $(document).on('click', item, function(e){

        e.preventDefault();

        var itemObject = $(this);
        var ajaxData = null;

        if(typeof someData == 'function'){
            ajaxData = someData(itemObject);
        }else{
            ajaxData = someData;
        }

        $.ajax({
            url:someUrl,
            data:ajaxData,
            method:'POST',
            success : function(data){
                successFunc(data, itemObject);
            }
        });

    });

}

/* example for someAjax func

    write like this
    someAjax('.link', '/programer_item.php', someFuncName, {action:'someAction', item_id:id});

    or

    someAjax('.link','/programer_item.php', someFuncName, someDataFuncName);

    where

    function someDataFuncName(itemObject){

        return {id:itemObject.data('id'), text:itemObject.parents('.parentOfItemObject').data('text')};

        // where itemObject = $('.link') in someAjax func

    }

*/

function socialAddVoice(){

    $('.inside-soc-item a').click(function (e) {

        e.preventDefault();
        var post_id = $(this).data('post'),
            type = $(this).data('type'),
            href = $(this).href;


        $.ajax({
            url:ajaxUrl,
            data:{'action':'socialAdd', 'post_id':post_id, 'type':type },
            method:'POST',
            success : function(data){

            }
        });

    })

}

/* stars ajax */

    function starAjax(){

        $(document).on('click', '.star-small:not(.chossen) .star', function(){

            var parent = $(this).parent();
            var parentWrap = parent.parents('.stars-wrap');
            var bigStar = parentWrap.find('.star-main');

            parent.addClass('chossen');

            var starPostId = parent.attr('data-post-id');

            var thisIndex = $(this).index();

            $.ajax({
                url:ajaxUrl,
                data:{action:'u_rating_update', 'rating':thisIndex,'post_id':starPostId},
                method:'POST',
                success:function (data) {

                    var parseIntData = parseInt(data);



                    bigStar.find('.star-value').text(data);

                    for(var i=0;i<=parseIntData;i++){
                        parent.find('.star').eq(i).addClass('active');
                    }

                    $.fancybox.open('Voice Accepted',{
                        autoSize:true,
                        fitToView:true,
                        wrapCSS:'hui',
                        closeBtn:false,
                        helper:{
                        overlay : {
                            closeClick : true
                        }
                    }

                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    },2000);

                }

            });



        });

        $('.star-small:not(.chossen)').mouseleave(function(event) {
            $(this).find('.star').removeClass('active');
            var activeStarsValue = $(this).attr('data-stars-value');
            for(var i=0;i<activeStarsValue;i++){
                $(this).find('.star').eq(i).addClass('active');
            }
        });

        var timer = null;

        $('.star-small:not(.chossen) .star').hover(
            function(){
                $('.star-small:not(.chossen) .active').removeClass('active');

                var starIndex = $(this).index();

                $('.star-small:not(.chossen)').each(function(){
                    $(this).find('.star').each(function(index){

                        if(index > starIndex){
                            return false;
                        }
                        $(this).attr('class','star active');

                    });
                });

            },
            function(){

            }
        );



    }

/* /stars ajax */

/* get-cookie */

    // возвращает cookie с именем name, если есть, если нет, то undefined
    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

/* /get-cookie */


$(document).ready(function(){


   validate('.subscribe-form form');
   validate('.send-contact', {submitFunction:validationCall});

   validate('.search-form-input', {submitFunction:validationCall});

   Maskedinput();
   fancyboxForm();

   starAjax();

});