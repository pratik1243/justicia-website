let index = 0;
let indexed = 0;
let slider = document.querySelectorAll("#slide-section .slides");
let h1 = document.querySelector(".slides h1");
let slidesec = document.getElementById("slide-section");
let slider2 = document.querySelectorAll(".slider2 .sliders2");
let menu = document.querySelector(".menu");
let dot2 = document.getElementById("dot2");
let dot1 = document.getElementById("dot1");
let popup = document.getElementById("popup");
let details = document.getElementById("section");
let body = document.getElementById("body");
let full = document.getElementById("full");
let slideBtn1 = document.querySelector(".slide-button-1");
let slideBtn2 = document.querySelector(".slide-button-2");
dot1.style.backgroundColor = "rgb(8, 175, 64)";

function next() {
  slider[index].classList.remove("active");
  index = (index + 1) % slider.length;
  slider[index].classList.add("active");
  h1.classList.add("up");
}

function prev() {
  slider[index].classList.remove("active");
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add("active");
}

function show() {
  let scroll = window.scrollY;

  if (scroll > 200) {
    document.getElementById("scroll-btn").style.display = "block";
  }

  if (scroll > 210) {
    document.getElementById("nav-section2").classList.add("down");
    document.getElementById("nav-section2").style.boxShadow = "0 0 15px grey";
  } else {
    document.getElementById("nav-section2").classList.remove("down");
    document.getElementById("nav-section2").style.boxShadow = "0 0 0px grey";
  }

  if (scroll < 180) {
    document.getElementById("scroll-btn").style.display = "none";
  }
}

function next2() {
  slider2[indexed].classList.remove("actived");
  indexed = (indexed + 1) % slider2.length;
  slider2[indexed].classList.add("actived");

  if (indexed == 0) {
    dot1.style.backgroundColor = "rgb(8, 175, 64)";
  } else {
    dot1.style.backgroundColor = "white";
  }

  if (indexed == 1) {
    dot2.style.backgroundColor = "rgb(8, 175, 64)";
  } else {
    dot2.style.backgroundColor = "white";
  }
}

function first() {
  slider2[0].classList.add("actived");
  slider2[1].classList.remove("actived");
}

function second() {
  slider2[1].classList.add("actived");
  slider2[0].classList.remove("actived");
}

menu.addEventListener("click", function () {
  if (popup.style.height == "0px") {
    popup.style.height = "400px";
    popup.style.borderBottom = "1px solid grey";
    details.style.display = "block";
    body.style.overflowY = "hidden";
    full.style.filter = "brightness(20%)";
  } else {
    popup.style.height = "0px";
    details.style.display = "none";
    body.style.overflowY = "visible";
    popup.style.borderBottom = "none";
    full.style.filter = "none";
  }
});

document.addEventListener("scroll", function () {
  show();
});

slideBtn1.addEventListener("click", prev);
slideBtn2.addEventListener("click", next);

dot1.addEventListener("click", first);
dot2.addEventListener("click", second);

setInterval(() => {
  next();
  next2();
}, 3000);
