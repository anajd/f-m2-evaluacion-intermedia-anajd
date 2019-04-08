"use strict";

const numberInput = document.getElementById("addNumber");
const btn = document.querySelector(".game__btn");
const feedBack = document.querySelector(".feedback");
const acc = document.querySelector(".acc");
let cont = 0;
let winNumber = true;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const secretNumber = getRandomNumber(100);
console.log(secretNumber);

const newNumber = () => {
  console.log(numberInput.value);
  if (cont < 5 && winNumber) {
    const value = parseInt(numberInput.value);
    if (value === secretNumber) {
      feedBack.innerHTML = "¡HAS GANADO CAMPEONA!";
      winNumber = false;
    } else if (value < secretNumber) {
      feedBack.innerHTML = "Demasiado bajo";
      cont++;
    } else {
      feedBack.innerHTML = "Demasiado alto";
      cont++;
    }
    acc.innerHTML = cont;
  }
};

btn.addEventListener("click", newNumber);
