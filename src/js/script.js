const contact = document.getElementById("contact");
const submitBtn = document.querySelector('button[type="submit"]');

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // effect: 'creative',
  effect: 'creative',
  creativeEffect: {
    prev: { translate: ['-120%', 0, -500] },
    next: { translate: ['120%', 0, -500] },
  },
//   effect: "flip",
//   flipEffect: { slideShadows: true },

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },

  // effect: 'cube',
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // effect: 'fade',
  // fadeEffect: { crossFade: true },
});
