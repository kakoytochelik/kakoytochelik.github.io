$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $('.auto').addClass('changebg1auto')
      }
      if ($(this).scrollTop() < 400) {
        $('.auto').removeClass('changebg1auto')
      }
    });
  });