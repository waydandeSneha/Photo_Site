/* Lightbox */
// var lightbox = new SimpleLightbox('.photo a', { /* options */ });


// document.addEventListener("DOMContentLoaded", function () {
//     var lightbox = new SimpleLightbox('.photo-container a', {
//       captions: false, // optional config
//       animationSpeed: 250
//     });
//   });


// deepseek
document.addEventListener('DOMContentLoaded', function() {
  // Initialize lightbox with proper options
  var lightbox = new SimpleLightbox('.image-link', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
    fadeSpeed: 300,
    doubleTapZoom: 2
  });
  
  // Refresh lightbox after DOM changes
  lightbox.refresh();
});