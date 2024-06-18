function cycleBackgrounds() {
    var index = 0;
    $imageEls = $('.toggle-image');
    setInterval(function() {
      index = index + 1 < $imageEls.length ? index + 1 : 0;
      $imageEls.eq(index).addClass('show');
      $imageEls.eq(index - 1).removeClass('show');
    }, 3500);
  };
  $(function() {
    cycleBackgrounds();
  });