$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('.exp').addClass('changebg1exp')
      }
      if ($(this).scrollTop() < 250) {
        $('.exp').removeClass('changebg1exp')
      }
    });
  });