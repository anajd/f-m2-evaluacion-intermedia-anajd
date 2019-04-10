"use strict";

const numberInput = document.getElementById("addNumber");
const btn = document.querySelector(".game__btn");
const feedBack = document.querySelector(".feedback");
const feedBack2 = document.querySelector(".feedback").innerHTML;
const acc = document.querySelector(".acc");
let cont = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let secretNumber = getRandomNumber(100);
console.log(secretNumber);

function paint(text) {
  feedBack.innerHTML = text;
}

function reboot() {
  cont = 0;
  paint(feedBack2);
  console.clear();
  secretNumber = getRandomNumber(100);
  console.log(secretNumber);
}

const newNumber = () => {
  console.log(numberInput.value);
  if (cont < 10) {
    const value = parseInt(numberInput.value);
    if (value === secretNumber) {
      paint("¡HAS GANADO CAMPEONA!");
      setTimeout(reboot, 5000);
    } else if (value < secretNumber) {
      paint("Demasiado bajo");
      cont++;
      if (cont === 10) {
        reboot();
      }
    } else {
      paint("Demasiado alto");
      cont++;
      if (cont === 10) {
        reboot();
      }
    }
    acc.innerHTML = cont;
  }
};

btn.addEventListener("click", newNumber);
