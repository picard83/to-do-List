"use strict";
const container = document.querySelector(".container");

const toDoItem = document.querySelector(".todoitem");

const btn = document.querySelector(".btn");

const list = document.querySelector(".ollist");

let storage = [];

btn.addEventListener("click", function () {
  let newElement = document.createElement("li");
  // newElement.innerText = `${toDoItem.innerHTML}`;
  newElement.innerHTML =
    '<input type="checkbox" class="check" />' + toDoItem.value;
  // newElement.innerText = toDoItem.value;
  list.append(newElement);

  const allCheckBox = document.querySelectorAll(".check");

  for (let i = 0; i < allCheckBox.length; i++) {
    let checkbox = allCheckBox[i];
    checkbox.addEventListener("click", function (e) {
      e.target.parentElement.classList.toggle("checked");
    });
  }

  storage.push(newElement.textContent);

  // console.log(newElement.innerText);
  // console.log(storage);
});

function localStorageFunction(storage) {
  for (let i = 0; i < storage.length; i++) {
    localStorage.setItem("local", storage);
  }

  console.log(storage);
}
localStorageFunction();
console.log(localStorage);
