window.addEventListener('DOMContentLoaded', () => {
    let timer = null
    var images = ['1.webp','2.webp','3.webp','4.webp','5.webp','6.webp','7.webp','8.webp','9.webp'],
    index = 1, 
    maxImages = images.length - 1;
    $('.profile').click(function (e) {
        openAboutPopup()
        if (timer !== null) return;
        timer = setInterval(function() {
            var currentImage = images[index];
            index = (index == maxImages) ? 0 : ++index;
            $('.slideshow_item img').delay(1200).fadeOut(1200, function() {
                $('.slideshow_item img').attr("src", 'img/carousel/'+currentImage);
                $('.slideshow_item img').delay(600).fadeIn(1200);
            });
        }, 4000);
    });
    $('.popup_close').click(function (e) {
        clearInterval(timer);
        timer = null;
        closeAboutPopup()

    });
    $('.info').click(function (e) {
        if (e.target !== this)
            return;
        clearInterval(timer);
        timer = null;
        closeAboutPopup()
    });

});

function openAboutPopup() {
    $('.slideshow_hidden').addClass('slideshow_item');
    $('body').addClass('body_stop_scroll');
    $('.info').addClass('info_display');
    setTimeout(function(){
        $('nav').addClass('background_blur');
        $('nav').removeClass('nav_blur');
        $('.cards').addClass('background_blur');
        $('.about_me').addClass('about_me_popup');
    }, 10); 
}


function closeAboutPopup() {
    $('.slideshow_hidden').removeClass('slideshow_item');
    $('body').removeClass('body_stop_scroll');
    $('nav').removeClass('background_blur');
    $('nav').addClass('nav_blur');
    $('.cards').removeClass('background_blur');
    $('.about_me').removeClass('about_me_popup');
    setTimeout(function(){
        $('.info').removeClass('info_display');
    }, 400);
}