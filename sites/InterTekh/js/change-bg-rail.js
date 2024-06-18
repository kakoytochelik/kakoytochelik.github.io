$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $('.rail').addClass('changebg1rail')
      }
      if ($(this).scrollTop() < 400) {
        $('.rail').removeClass('changebg1rail')
      }
    });
  });