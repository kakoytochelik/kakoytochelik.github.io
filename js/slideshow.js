window.addEventListener('DOMContentLoaded', () => {
     var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'],
         index = 1, 
         maxImages = images.length - 1;
     var timer = setInterval(function() {
         var currentImage = images[index];
         index = (index == maxImages) ? 0 : ++index;
         $('.slideshow_item img').fadeOut(1000, function() {
             $('.slideshow_item img').attr("src", 'img/carousel/'+currentImage);
             $('.slideshow_item img').fadeIn(1000);
         });
     }, 4000);
 }) 
