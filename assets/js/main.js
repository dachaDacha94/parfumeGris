const swiperBanner = new Swiper(".banner__swiper", {
  direction: "horizontal",
  effect: "fade",
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle("accordeon__item-activ");
  })
});