$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('.sea').addClass('changebg1sea')
      }
      if ($(this).scrollTop() < 250) {
        $('.sea').removeClass('changebg1sea')
      }
    })
  });