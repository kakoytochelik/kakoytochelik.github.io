$(document).ready(function() {
    window.onscroll = function() {
      myFunction()
    };
    var dropmenu = document.getElementById("FloatingMenu");
    var sticky = dropmenu.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        dropmenu.classList.add("sticky");
      } else {
        dropmenu.classList.remove("sticky");
      }
    }
})