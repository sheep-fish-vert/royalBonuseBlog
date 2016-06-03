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

        $(window).resize(function(){

            if($(window).width()>992){
                $('.header-bottom-wrap').removeAttr('style');
            }

        });

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

/* body background-size */

    function bodyBackgroundSize(){

        function bodyBackgroundSizeCalc(){

            var windowParams = [parseInt($(document).width()), parseInt($(document).height())];

            if(windowParams[1] >= windowParams[0]){
                $('body').css({'background-size':'auto '+windowParams[1]+'px'});
            }else{
                $('body').css({'background-size':windowParams[0]+'px auto'});
            }

        }

        bodyBackgroundSizeCalc();

        $(window).load(function(){

            bodyBackgroundSizeCalc();

        });

        $(window).resize(function(){

            bodyBackgroundSizeCalc();

        });

    }

/* /body background-size */

/* search select styling */

    function selectstyling(){

        var timer = null;

        $('.formstyler-class').styler({
            selectPlaceholder:selectPlaceholderValue,
            onSelectOpened:function(){
                clearTimeout(timer);
                var item = $(this);
                var select = item.find('.jq-selectbox__dropdown');
                select.css('display','none').stop().slideDown(300, function(){
                    select.addClass('show');
                });
            },
            onSelectClosed:function(){
                clearTimeout(timer);
                var item = $(this);
                var select = item.find('.jq-selectbox__dropdown');
                select.stop().slideUp(300, function(){
                    select.removeClass('show');
                });
            }
        });

    }

/* /search select styling */

/* clear search field */

    function clearSearchField(){

        $('.form-input-clear').click(function(){
            $(this).parent().find('input').val('');
        });

    }

/* /clear search field */

/* casino-page stars */

    function casinoPageStars(){

        if($('.star-small.chossen')){
            $('.star-small').each(function(){
                var starsValue = parseInt($(this).data('stars-value'));

                for(var i=0;i<starsValue;i++){
                    $(this).find('.star').eq(i).addClass('active');
                }
            });
        }



    }

/* casino-page stars */


$(document).ready(function(){

    footerAdaptation();
    bodyBackgroundSize();
    selectstyling();
    clearSearchField();

});


$(window).load(function(){

    headerSliderInit();
    toogleHeaderNav();

    casinoPageStars();

});

$(window).resize(function(){

});