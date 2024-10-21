const solution = new Swiper('.swiper.is-solution', {
    slideClass: 'solutions_swiper_item',
    wrapperClass: 'solutions_swiper_list',
    slideActiveClass: 'is-active',
    loop:true,
    slidesPerView: 1.5,
    centeredSlides: true,
    speed: 700,
    grabCursor: true,
    breakpoints: {
        992: {
          slidesPerView: 2
        }
      }
  });