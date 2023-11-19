"use strict";
const container = document.querySelector(".container");

const toDoItem = document.querySelector(".todoitem");

const btn = document.querySelector(".btn");

const list = document.querySelector(".ollist");

let storage = [];
console.log("hi");
btn.addEventListener("click", function () {
  let newElement = document.createElement("li");
  // newElement.innerText = `${toDoItem.innerHTML}`;
  newElement.innerHTML =
    '<input type="checkbox" class="check" /> ' +
    toDoItem.value +
    "<button type='button' class='kill'>delete</button>";
  // newElement.innerText = toDoItem.value;
  list.append(newElement);
  ///// delete button ////
  let deleteBtns = document.querySelectorAll(".kill");

  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      let newElement = deleteBtn.parentNode;
      newElement.remove();
    });
    ///end of delete button///////
  });

  const allCheckBox = document.querySelectorAll(".check");

  for (let i = 0; i < allCheckBox.length; i++) {
    let checkbox = allCheckBox[i];
    checkbox.addEventListener("click", function (e) {
      e.target.parentElement.classList.toggle("checked");
    });
  }

  localStorage.setItem("local", storage);
});
