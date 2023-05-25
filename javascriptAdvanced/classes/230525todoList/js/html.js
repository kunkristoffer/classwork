import { todolist, updateLocalStorage, updateTodoArray, formatDate, sortList } from "./data.js"

// defining output DOMs
const todoPending = document.getElementById("todo-pending")
const todoCompleted = document.getElementById("todo-completed")


/**
 * Creates an HTML representation of a todo item and appends it to the todoCompletedContainer.
 * @param {string} text - The text content of the todo item.
 * @param {string} todoId - The unique identifier for the todo item.
 * @returns {void}
 */
export function createTodoCompletedHtml(text, todoId) {
 const container = document.createElement("div");
 const paragraph = document.createElement("p");
 const timeCreated = document.createElement("span");

 paragraph.textContent = text;
 timeCreated.textContent = formatDate(todoId);

 container.append(paragraph, timeCreated);
 todoCompleted.appendChild(container);
}


/**
 * Creates an HTML representation of a todo item and appends it to the todoPendingContainer.
 * @param {string} text - The text content of the todo item.
 * @param {string} todoId - The unique identifier for the todo item.
 * @returns {void}
 */
export function createTodoPendingHtml(text, todoId) {
 const container = document.createElement("div"); 
 const paragraph = document.createElement("p");
 const timeCreated = document.createElement("span");
 paragraph.textContent = text;
 timeCreated.textContent = formatDate(todoId);
 timeCreated.style.fontSize = "12px";
 timeCreated.style.color = "grey";
 
 const button = document.createElement("button");
 button.textContent = "Complete todo";
 
 // add event listener to the remove todo button
 button.addEventListener("click", () => completeTodo(container, todoId, text));
 
 container.append(paragraph, timeCreated, button);
 todoPending.appendChild(container);
}

// update a todo item, set it as isComplete to true, update local storage, and update the webpage with new data
function completeTodo(element, todoId, text) {
  updateTodoArray(todoId)
  updateLocalStorage()

  element.remove()
  // create completed todo elements:
  createTodoCompletedHtml(text, todoId)
}

/**
 * 
 * @param {*} array 
 * @param {*} orderBy 
 * @param {*} order 
 */
export function sortPendingTodos(array, orderBy, order) {
  const sortedList = sortList(array, {
    sortBy: orderBy,
    order: order
  })
 
  // remove pending todo html elements from the pending todo container
  // todo pending elements:
  const todoPendingContainer = document.getElementById("todo-pending")
 
  // remove exisiting pending todos
  while (todoPendingContainer.firstChild) {
    todoPendingContainer.firstChild.remove()
  }
 
  todoPendingContainer.textContent = ""
 
  sortedList.forEach((todoItem) => {
    // console.log(todoItem)
    if (todoItem.isCompleted !== true) createTodoPendingHtml(todoItem.name, todoItem.id)
  })
 }









