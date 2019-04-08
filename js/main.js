"use strict";

const numberInput = document.getElementById("addNumber");
const btn = document.querySelector(".game__btn");
const feedBack = document.querySelector(".feedback");
const acc = document.querySelector(".acc");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const secretNumber = getRandomNumber(100);
console.log(secretNumber);

const newNumber = () => {
  console.log(numberInput.value);
  const value = parseInt(numberInput.value);
  if (value === secretNumber) {
    feedBack.innerHTML = "¡HAS GANADO CAMPEONA!";
  } else if (value < secretNumber) {
    feedBack.innerHTML = "Demasiado bajo";
  } else {
    feedBack.innerHTML = "Demasiado alto";
  }
};

btn.addEventListener("click", newNumber);
