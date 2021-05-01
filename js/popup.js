window.addEventListener('DOMContentLoaded', () => {
    $('.profile').click(function () {
        $('body').addClass('body_stop_scroll');
        $('.info').addClass('info_display');
        setTimeout(function(){
            $('.info').addClass('info_show');
            $('.about_me').addClass('about_me_popup');
          }, 10);
          setTimeout(function(){
            $('.slideshow_hidden').addClass('slideshow_item');
          }, 700);
        
    });
    $('.info').click(function (e) {
        if (e.target !== this)
            return;
        $('body').removeClass('body_stop_scroll');
        $('.info').removeClass('info_show');
        $('.about_me').removeClass('about_me_popup');
        $('.slideshow_hidden').removeClass('slideshow_item');
        setTimeout(function(){
            $('.info').removeClass('info_display');
            $('.slideshow_hidden img').attr("src", 'img/carousel/1.jpg');
          }, 400);

    });
    $('.popup_close').click(function (e) {
        if (e.target !== this)
            return;
        $('body').removeClass('body_stop_scroll');
        $('.info').removeClass('info_show');
        $('.about_me').removeClass('about_me_popup');
        $('.slideshow_hidden').removeClass('slideshow_item');
        setTimeout(function(){
            $('.info').removeClass('info_display');
            $('.slideshow_hidden img').attr("src", 'img/carousel/1.jpg');
          }, 400);
    });
})