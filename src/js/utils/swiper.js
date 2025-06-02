window.addEventListener('load', function () {
  if (document.querySelector('.blog-hero__slider')) {
    new Swiper('.blog-hero__slider', {
      loop: true,
      spaceBetween: 15,
      autoplay: {
        disableOnInteraction: false,
      },
      pagination: {
        el: '.blog-hero__pagination',
        clickable: true,
        type: 'bullets',
      },
      breakpoints: {
        768: {
          spaceBetween: 80,
          speed: 2000,
        },
      },
    });
  }
});
