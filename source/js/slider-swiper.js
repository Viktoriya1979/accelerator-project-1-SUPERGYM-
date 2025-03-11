import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.juri__swiper-container.swiper');
const slideElements = document.querySelectorAll('.swiper-slide');

const sliderLooping = new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  slidesPerView: 1,
  spaceBetween: 40,
  slideToClickedSlide: true,
  autoHeight: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      allowTouchMove: false,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const createFocusOnElement = () => {
  slideElements.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
};

export { sliderLooping, createFocusOnElement };
