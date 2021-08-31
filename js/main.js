$(function(){

    $('.pets__slider').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 564,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    var scrolling = $('.header');
    var bgwhite = $('.header__menu');
    var dark = $('.header__burger');
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 150){
           scrolling.addClass('scrolling');
           bgwhite.addClass('bgwhite');
           dark.addClass('dark');
        }
        else if ($(this).scrollTop() <= 150 && scrolling.hasClass('scrolling')){
            scrolling.removeClass('scrolling');
            bgwhite.removeClass('bgwhite');
            dark.removeClass('dark');
        }

    });




});