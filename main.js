let IconMenu = document.querySelector("#OpenMenu");

let menu = document.querySelector(".menu");
let closeResrv = document.querySelector("#closeResrv");
let btnResrv = document.querySelectorAll(".btnResrv");
let reservation = document.querySelector("#reservation");

IconMenu.onclick = () => {
  IconMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

let header = document.getElementById("header");

window.onscroll = function () {
  if (this.scrollY >= 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swipper-pagination",
    clickable: true,
  },
  spaceBetwmn: 0,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
});
closeResrv.onclick = () => {
  reservation.classList.remove("active");
};

btnResrv.forEach((boxa) => {
  boxa.onclick = () => {
    reservation.classList.add("active");
  };
});
