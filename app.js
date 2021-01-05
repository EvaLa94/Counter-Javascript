// Counter

const countDisplay = document.querySelector(".current-count");
const btnPlus = document.querySelector(".button-plus");
const btnMinus = document.querySelector(".button-minus");

let currentCount = 0;

btnPlus.addEventListener("click", function () {
  currentCount++;
  countDisplay.innerHTML = currentCount;
  changeColor();
});

btnMinus.addEventListener("click", function () {
  currentCount--;
  countDisplay.innerHTML = currentCount;
  changeColor();
});

function changeColor() {
  if (currentCount < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Buttons (change background)

const addBtn = document.querySelector(".add");
const wrapper = document.querySelector(".wrapper");

addBtn.addEventListener("click", function () {
  wrapper.classList.toggle("wrapper-open");
});

const btnBg1 = document.querySelector("button.bg1");
const btnBg2 = document.querySelector("button.bg2");
const btnBg3 = document.querySelector("button.bg3");
const btnBg4 = document.querySelector("button.bg4");
const btnBg5 = document.querySelector("button.bg5");

btnBg5.style.background = linearGradient();

btnBg1.addEventListener("click", function () {
  document.body.style.background = "";
  document.body.className = "background1";
});

btnBg2.addEventListener("click", function () {
  document.body.style.background = "";

  document.body.className = "background2";
});

btnBg3.addEventListener("click", function () {
  document.body.style.background = "";

  document.body.className = "background3";
});

btnBg4.addEventListener("click", function () {
  document.body.style.background = "";

  document.body.className = "background4";
});

btnBg5.addEventListener("click", function () {
  document.body.style.background = linearGradient();
});

// Change background color (generate random linear gradient)

function randomNumber() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function randomLinear() {
  let deg = Math.floor(Math.random() * 361);
  return `${deg}deg`;
}

function linearGradient() {
  return `linear-gradient(${randomLinear()},${randomNumber()},${randomNumber()})`;
}
