$(function () {

    'use strict';

    //adjust slider height

    var winh = $(window).height(),

        upph = $('.upper-bar').innerHeight(),

        navh = $('.navbar').innerHeight();

        $('.slider,.carousel-item').height(winh - (upph + navh));
    //featured work shuffle
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all')
        {
            $('.shuffle-image .col-md').css('opacity', 1);
        }else
        {
            $('.shuffle-image .col-md').css('opacity', '.08');

            $($(this).data('class')).parent().css('opacity', 1 );
        }

    });
})