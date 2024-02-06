window.addEventListener('DOMContentLoaded', () => {
    $('.profile').click(function () {
        $('.slideshow_hidden').addClass('slideshow_item');
        $('body').addClass('body_stop_scroll');
        $('.info').addClass('info_display');
        setTimeout(function(){
            $('.info').addClass('info_show');
            $('nav').addClass('background_blur');
            $('nav').removeClass('nav_blur');
            $('.cards').addClass('background_blur');
            $('.about_me').addClass('about_me_popup');
        }, 10); 
    });
    $('.info').click(function (e) {
        if (e.target !== this)
            return;
        $('.slideshow_hidden').removeClass('slideshow_item');
        $('body').removeClass('body_stop_scroll');
        $('.info').removeClass('info_show');
        $('nav').removeClass('background_blur');
        $('nav').addClass('nav_blur');
        $('.cards').removeClass('background_blur');
        $('.about_me').removeClass('about_me_popup');
        setTimeout(function(){
            $('.info').removeClass('info_display');
            $('.slideshow_hidden img').attr("src", 'img/carousel/1.webp');
        }, 400);
    });
    $('.popup_close').click(function (e) {
        if (e.target !== this)
            return;
        $('.slideshow_hidden').removeClass('slideshow_item');
        $('body').removeClass('body_stop_scroll');
        $('.info').removeClass('info_show');
        $('nav').removeClass('background_blur');
        $('nav').addClass('nav_blur');
        $('.cards').removeClass('background_blur');
        $('.about_me').removeClass('about_me_popup');
        setTimeout(function(){
            $('.info').removeClass('info_display');
            $('.slideshow_hidden img').attr("src", 'img/carousel/1.webp');
        }, 400);
        
    });
})