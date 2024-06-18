$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('.avia').addClass('changebg1avia')
      }
      if ($(this).scrollTop() < 250) {
        $('.avia').removeClass('changebg1avia')
      }
      if ($(this).scrollTop() > 175) {
        $(".btnup").fadeIn("slow", function() {});
      }
      if ($(this).scrollTop() < 175) {
        $(".btnup").fadeOut("slow", function() {});
      }
    });
  });