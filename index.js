let offset = 0;
const sliderline = document.querySelector('.main__Exclusive-slider-line');

document.querySelector('.main__Exclusive-slider-next').addEventListener('click', function () {
   offset += 344;
   if (offset > 1032) {
      offset = 0;
   }
   sliderline.style.left = -offset + 'px';
});

document.querySelector('.main__Exclusive-slider-prev').addEventListener('click', function () {
   offset -= 344;
   if (offset < 0) {
      offset = 1032;
   }
   sliderline.style.left = -offset + 'px';
});
