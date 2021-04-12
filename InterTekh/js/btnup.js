$(function() {
    $(window).scroll(function() {

      if ($(this).scrollTop() > 175) {
        $(".btnup").fadeIn("slow", function() {});
      }
      if ($(this).scrollTop() < 175) {
        $(".btnup").fadeOut("slow", function() {});
      }
    });
  });