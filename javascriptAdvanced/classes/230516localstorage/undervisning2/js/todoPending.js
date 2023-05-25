import { updateLocalStorage, updateTodoArray } from "./data.js"
// todo pending elements:
const todoPendingContainer = document.getElementById("todo-pending")

// create a todoitem html element
export function createTodoHtml(text, todoId) {
  // create html elements:
  const container = document.createElement("div")
  container.style = "display: flex;"

  const paragraph = document.createElement("p")
  paragraph.textContent = text

  const timeCreated = document.createElement("span")
  // convert and display the todoId timestamp as human readable datetimetext
  timeCreated.textContent = formatDate(todoId) 

  const button = document.createElement("button")
  button.textContent = "Remove todo"

  // add event listener to the remove todo button
  button.addEventListener("click", () => removeTodo(container, todoId))

  container.append(paragraph, timeCreated, button)
  todoPendingContainer.appendChild(container)
}

// removes a pending todo item element from the page and the array
function removeTodo(element, todoId) {
  // update todolist array with the removed item removed
  updateTodoArray(todoId)
  // update local storage:
  updateLocalStorage()

  element.remove()
}

// returns a human readable datetime text:
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

/**
 * Dette er en test
 * @param {*} formatDate - spennende
 */




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

