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

function reboot() {
  cont = 0;
  feedBack.innerHTML = feedBack2;
  console.clear();
  secretNumber = getRandomNumber(100);
  console.log(secretNumber);
}

const newNumber = () => {
  console.log(numberInput.value);
  if (cont < 10) {
    const value = parseInt(numberInput.value);
    if (value === secretNumber) {
      feedBack.innerHTML = "¡HAS GANADO CAMPEONA!";
      reboot();
    } else if (value < secretNumber) {
      feedBack.innerHTML = "Demasiado bajo";
      cont++; // cont = cont + 1
      if (cont === 10) {
        reboot();
      }
    } else {
      feedBack.innerHTML = "Demasiado alto";
      cont++;
      if (cont === 10) {
        reboot();
      }
    }
    acc.innerHTML = cont;
  }
};

btn.addEventListener("click", newNumber);
