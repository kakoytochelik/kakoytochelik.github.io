window.addEventListener('DOMContentLoaded', () => {
     var images = ['1.webp','2.webp','3.webp','4.webp','5.webp','6.webp','7.webp','8.webp','9.webp'],
         index = 1, 
         maxImages = images.length - 1;
     var timer = setInterval(function() {
         var currentImage = images[index];
         index = (index == maxImages) ? 0 : ++index;
         $('.slideshow_item img').delay(1200).fadeOut(1200, function() {
             $('.slideshow_item img').attr("src", 'img/carousel/'+currentImage);
             $('.slideshow_item img').delay(600).fadeIn(1200);
         });
     }, 4000);
 }) 
