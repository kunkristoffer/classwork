import { updateLocalStorage, updateTodoArray } from "./data.js"
import { createTodoCompletedHtml } from "./todoCompleted.js"
// todo pending elements:
const todoPendingContainer = document.getElementById("todo-pending")

/**
    Creates an HTML representation of a todo item and appends it to the todoPendingContainer.
    @param {string} text - The text content of the todo item.
    @param {string} todoId - The unique identifier for the todo item.
    @returns {void}
    */
export function createTodoPendingHtml(text, todoId) {
  // create html elements:
  const container = document.createElement("div");
  container.style = "display: flex;";
  
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  
  const timeCreated = document.createElement("span");
  timeCreated.textContent = formatDate(todoId);
  
  const button = document.createElement("button");
  button.textContent = "Complete todo";
  
  // add event listener to the remove todo button
  button.addEventListener("click", () => completeTodo(container, todoId, text));
  
  container.append(paragraph, timeCreated, button);
  todoPendingContainer.appendChild(container);
}

// update a todoitem, set it as isComplete to true, update local storage, and update the webpage with new data
function completeTodo(element, todoId, text) {
  updateTodoArray(todoId)
  updateLocalStorage()

  element.remove()
  // create completed todo elements:
  createTodoCompletedHtml(text, todoId)
}

/**
 * convert and return the given date (or timestamp) as human readable datetimetext
 * @param {*} date 
 * @returns 
 */
function formatDate(date) {
  const dateTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }
  const dateTimeInstance = 
    new Intl.DateTimeFormat("no-NO", dateTimeOptions)
    .format(date);

  return dateTimeInstance
}



























// 1. eksempel på import/export "default":
// const myNum = 10
// 1. eksempel på import/export "default":
// export default myNum

// 2. eksempel på "named" import/export:
/* const myNum = 10

function myFunc() {

  console.log("my func running...")
}

export { myFunc, myNum } */

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

// 2b. eksempel på "named" import/export alternativ:
/* export const myNum = 10

export function myFunc() {

  console.log("my func running...")
}

export function newFunction() {

} */

