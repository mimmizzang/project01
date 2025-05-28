const swiper = new Swiper(".wrap", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 0,
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: true,
  speed: 1000,
  effect: "coverflow", //이펙트 효과
  coverflowEffect: {
    rotate: 50, // 회전 각도
    stretch: -100, // 슬라이드 간의 당김 정도 지정
    depth: 400, // 원근감 지정
    modifier: 1, // 중첩 정도 지정
    slideShadows: false, // 슬라이드의 그림자 생성
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
});

const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");

btnStart.addEventListener("click", () => {
  swiper.autoplay.start();
});

btnStop.addEventListener("click", () => {
  swiper.autoplay.stop();
});
