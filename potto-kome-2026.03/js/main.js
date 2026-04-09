
// ハンバーガー
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("#header");
const nav = document.querySelector(".hamburger-nav");

hamburger.addEventListener("click", () => {

  header.classList.toggle("open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle("is-menu-open");

});




// 最新記事

if (window.innerWidth > 769) {

  const heroItems = document.querySelectorAll(".hero__main");
  const sideItems = document.querySelectorAll(".js-hero-item");

  sideItems.forEach((item, index) => {

    item.addEventListener("mouseenter", () => {

      heroItems.forEach(hero => hero.classList.remove("is-active"));
      heroItems[index].classList.add("is-active");

    });

  });

}

let heroSwiper;

function initHeroSwiper() {

  if (window.innerWidth <= 768) {

    if (!heroSwiper) {

      heroSwiper = new Swiper(".js-sidebar-swiper", {

        slidesPerView: 1.5,
        spaceBetween: 20,
        speed: 600,
        loop: true,

        on: {

          init: function () {
            updateActive(this);
          },

          slideChange: function () {
            updateActive(this);
          }

        }

      });

    }

  } else {

    if (heroSwiper) {
      heroSwiper.destroy(true, true);
      heroSwiper = undefined;
    }

  }

}

function updateActive(swiper) {

  swiper.slides.forEach(slide => {
    slide.classList.remove("is-active");
  });

  swiper.slides[swiper.activeIndex].classList.add("is-active");

}

initHeroSwiper();

// web制作ページheader動くUI

window.addEventListener("resize", initHeroSwiper);

const text = `const blog = {
  html: true,
  css: true,
  javascript: true
};`;

const el = document.getElementById("typing-code");

let i = 0;
const speed = 100;

function typing() {

  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typing, speed);

  } else {

    setTimeout(() => {
      el.textContent = "";
      i = 0;
      typing();
    }, 1500);

  }

}

typing();


typing();
