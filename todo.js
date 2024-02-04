const input = document.querySelector("#input-todo");
// console.log(input);
const list_items = document.querySelector("#list");
const listItem = document.createElement("li");
const button = document.querySelector("#button");
// console.log(button);

button.addEventListener("click", function (event) {
  event.preventDefault();
  const todo = input.value;
  // console.log(todo);
  addTodo(todo);
  input.value = "";
});

function addTodo(todo) {
  const listItem = document.createElement("li"); //this is inside function because we need to create new li every time add-button is clicked
  listItem.innerHTML += `<li>${todo}</li><button type='submit' id='delete-button'>Delete</button>`;
  list_items.appendChild(listItem);

  const delete_task = listItem.querySelector("#delete-button");
  delete_task.addEventListener("click", function (event) {
    event.preventDefault();
    listItem.remove();
  });
}
