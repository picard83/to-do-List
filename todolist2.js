const dataKey = "todos";

const btn = document.querySelector(".btn");

function getTodos() {
  return JSON.parse(localStorage.getItem(dataKey)) || [];
}

function updateTodos(todos) {
  localStorage.setItem(dataKey, JSON.stringify(todos));
}

function addTodo(newTodo) {
  const todos = getTodos();
  todos.push({ text: newTodo, done: false });
  updateTodos(todos);
}

function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  updateTodos(todos);
}

function getTodo(index) {
  return getTodos()[index];
}

function showItems() {
  const list = document.querySelector(".ollist");
  const items = getTodos();
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let newElement = document.createElement("li");
    newElement.className = item.done ? "checked" : "";
    newElement.innerHTML = `
      <input type="checkbox" class="check" ${item.done ? "checked" : ""}  />  
      ${item.text}
      <button type='button' id='${i}' class='kill'>delete</button>`;
    list.append(newElement);
  }
  deleteIt();
}

function deleteIt() {
  let deleteBtns = document.querySelectorAll(".kill");
  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
      let index = parseInt(e.target.id);
      console.log(index);
      deleteTodo(index);
      showItems();
    });
    ///end of delete button///////
  });
}

btn.addEventListener("click", function (e) {
  const toDoItem = document.querySelector(".todoitem");
  addTodo(toDoItem.value);
  toDoItem.value = " ";
  showItems();
});

// init

showItems();
