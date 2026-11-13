// Slider - Завершені акції
let completedPromotionsSlider = document.getElementById('completed-promotions-slides')
if (completedPromotionsSlider) {
   new Swiper(completedPromotionsSlider, {
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.27,
            spaceBetween: 12,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1025: {
            slidesPerView: 3,
            spaceBetween: 20,
         }
      },
   });
}