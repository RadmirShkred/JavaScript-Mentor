import '../scss/style.scss';
import Swiper from './swiper.min.js';


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

