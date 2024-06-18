window.addEventListener('DOMContentLoaded', () => {
    $('.card_container').hover(function () {
        $(this)
            .closest('div')
            .find('.card_background')
        .addClass('card_background_hover');
        $(this)
        .closest('div')
            .find('.card_content')
        .addClass('card_content_visible');
    }, function () {
        $(this)
            .closest('div')
            .find('.card_background')
        .removeClass('card_background_hover');
        $(this)
            .closest('div')
            .find('.card_content')
        .removeClass('card_content_visible');
    });
    $('.card_container').on('touchstart', function() {
        $(this)
            .closest('div')
            .find('.card_background')
        .addClass('card_background_hover');
        $(this)
            .closest('div')
            .find('.card_content')
        .addClass('card_content_visible');
    });
    $('.card_container').on('touchmove', function() {
        $(this)
            .closest('div')
            .find('.card_background')
        .removeClass('card_background_hover');
        $(this)
            .closest('div')
            .find('.card_content')
        .removeClass('card_content_visible');
    });
    $('body').on('touchmove', function() {
        $(this)
            .find('.card_background')
        .removeClass('card_background_hover');
        $(this)
            .find('.card_content')
        .removeClass('card_content_visible');
    });
})