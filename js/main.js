"use strict";

const numberInput = document.getElementById("addNumber");
const btn = document.querySelector(".game__btn");
const feedBack = document.querySelector(".feedback");
const tryNumber = document.querySelector(".try__text");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log("> " + getRandomNumber(100));

const newNumber = () => {
  console.log(numberInput.value);
  const value = numberInput.value;
  if (value === getRandomNumber) {
    return (feedBack.innerHTML = "¡HAS GANADO CAMPEONA!");
  } else if (value < getRandomNumber) {
    return (feedBack.innerHTML = "Demasiado bajo");
  } else if (value > getRandomNumber) {
    return (feedBack.innerHTML = "Demasiado alto");
  }
};

btn.addEventListener("click", newNumber);
