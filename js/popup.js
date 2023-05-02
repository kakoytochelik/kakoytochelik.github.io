window.addEventListener('DOMContentLoaded', () => {
    $('.profile').click(function () {
        $('.slideshow_hidden').addClass('slideshow_item');
        $('body').addClass('body_stop_scroll');
        $('.info').addClass('info_display');
        setTimeout(function(){
            $('.info').addClass('info_show');
            $('.about_me').addClass('about_me_popup');
        }, 10);
        setTimeout(function(){
            $('.hidden_attribute').addClass('info_show');
        }, 600);
        // setTimeout(function(){
        // }, 1000);
        
    });
    $('.info').click(function (e) {
        if (e.target !== this)
            return;
        $('.slideshow_hidden').removeClass('slideshow_item');
        $('body').removeClass('body_stop_scroll');
        $('.hidden_attribute').removeClass('info_show');
        $('.info').removeClass('info_show');
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
        $('.hidden_attribute').removeClass('info_show');
        $('.info').removeClass('info_show');
        $('.about_me').removeClass('about_me_popup');
        setTimeout(function(){
            $('.info').removeClass('info_display');
            $('.slideshow_hidden img').attr("src", 'img/carousel/1.webp');
        }, 400);
        
    });
})