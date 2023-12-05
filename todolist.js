"use strict";
const container = document.querySelector(".container");

const toDoItem = document.querySelector(".todoitem");

const btn = document.querySelector(".btn");

const list = document.querySelector(".ollist");

let clearBtn = document.querySelector(".clearBtn");

let storage = [];
btn.addEventListener("click", function (e) {
  const items = JSON.parse(localStorage.getItem("local")) || [];
  items.push(toDoItem.value);
  localStorage.setItem("local", JSON.stringify(items));

  toDoItem.value = " ";
  showItems();
  // checkedIt();
});
//end of ADD ITEM BTN LISTENER//////////////////////

function showItems() {
  const items = JSON.parse(localStorage.getItem("local")) || [];
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let newElement = document.createElement("li");
    // newElement.className = "checked";
    newElement.innerHTML = `
      <input type="checkbox" class="check "  />  
      ${items[i]}
      <button type='button' id='${i}' class='kill'>delete</button>`;
    list.append(newElement);
  }
  deleteIt();
  // checkedIt();
}
showItems();

///// delete button ////
``;
function deleteIt() {
  const items = JSON.parse(localStorage.getItem("local")) || [];
  let deleteBtns = document.querySelectorAll(".kill");
  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
      let index = parseInt(e.target.id);
      items.splice(index, 1);
      localStorage.setItem("local", JSON.stringify(items));
      showItems();
    });
    ///end of delete button///////
  });
  checkedIt();
}
//////BEGINING OF CHECKBOX'S///////////
function checkedIt() {
  const allCheckBox = document.querySelectorAll(".check");

  for (let i = 0; i < allCheckBox.length; i++) {
    let checkbox = allCheckBox[i];
    checkbox.addEventListener("click", function (e) {
      console.log(e.target.parentElement);
      e.target.parentElement.classList.toggle("checked");
    });
  }
}
checkedIt();

//////////////////////////

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  showItems();
});

// console.log(localStorage);
// console.log(storage);

////////////////////////chat gpt code (it works)///////
// "use strict";

// const container = document.querySelector(".container");
// const toDoItem = document.querySelector(".todoitem");
// const btn = document.querySelector(".btn");
// const list = document.querySelector(".ollist");

// // Retrieve stored items from local storage
// let storage = JSON.parse(localStorage.getItem("local")) || [];

// // Update the todo list with the retrieved items
// function updateTodoList() {
//   list.innerHTML = ""; // Clear the existing list

//   for (let i = 0; i < storage.length; i++) {
//     let newElement = createNewElement(storage[i]);
//     list.append(newElement);
//   }
// }

// function createNewElement(value) {
//   let newElement = document.createElement("li");
//   newElement.innerHTML =
//     '<input type="checkbox" class="check" /> ' +
//     value +
//     "<button type='button' class='kill'>delete</button>";

//   // Delete button
//   let deleteBtns = newElement.querySelectorAll(".kill");

//   deleteBtns.forEach(function (deleteBtn) {
//     deleteBtn.addEventListener("click", function () {
//       let elementToRemove = deleteBtn.closest("li");
//       if (elementToRemove) {
//         elementToRemove.remove();
//         updateLocalStorage();
//       }
//     });
//   });

//   return newElement;
// }

// // Update the todo list when the page loads
// updateTodoList();

// btn.addEventListener("click", function () {
//   let newElement = createNewElement(toDoItem.value);
//   list.append(newElement);

//   // Toggle checkbox
//   const checkbox = newElement.querySelector(".check");
//   checkbox.addEventListener("change", function (e) {
//     newElement.classList.toggle("checked", e.target.checked);
//     updateLocalStorage();
//   });

//   // Add new item to storage
//   storage.push(newElement.textContent.trim());
//   updateLocalStorage();

//   // Clear input field
//   toDoItem.value = "";
// });

// function updateLocalStorage() {
//   // Update local storage with the current todo list
//   localStorage.setItem("local", JSON.stringify(storage));
// }
