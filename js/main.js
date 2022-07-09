$(document).ready(function () {
  $(".loading").fadeOut();
  setTimeout(() => {
    document.querySelectorAll(".landing * ").forEach((e) => {
      e.classList.add("reveal");
    });
  }, 500);
  $(".yearly").fadeOut();

  $(".account-btn button").click(function () {
    $(".yearly , .mounthly").fadeOut();
    $($(this).attr("data-goal")).fadeIn();
    $(".account-btn button").addClass("bg-white").removeClass("bg-color");
    $(this).addClass("bg-color").removeClass("bg-white");
    if ($(".year-btn").hasClass("bg-color")) {
      $(".year-btn span:nth-child(2)").addClass("text-white");
    } else {
      $(".year-btn span:nth-child(2)").removeClass("text-white");
    }
  });

  $(".span").click(() => {
    $(".menu").toggleClass("active");
    $(".span").toggleClass("active");
  });
});

let myAnimation = document.querySelectorAll(
  "*.dReveal,*.rReveal,*.lReveal,*.uReveal"
);
window.addEventListener("scroll", () => {
  myAnimation.forEach((e) => {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});
document.querySelector("#copyright-data").innerHTML = new Date().getFullYear();
