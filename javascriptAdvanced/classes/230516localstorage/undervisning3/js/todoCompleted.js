import { updateLocalStorage, updateTodoArray } from "./data.js"
// todo pending elements:
const todoCompletedContainer = document.getElementById("todo-completed")

/**
    Creates an HTML representation of a todo item and appends it to the todoPendingContainer.
    @param {string} text - The text content of the todo item.
    @param {string} todoId - The unique identifier for the todo item.
    @returns {void}
    */
export function createTodoCompletedHtml(text, todoId) {
  // create html elements:
  const container = document.createElement("div");
  container.style = "display: flex;";
  
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  
  const timeCreated = document.createElement("span");
  timeCreated.textContent = formatDate(todoId);

  container.append(paragraph, timeCreated);
  todoCompletedContainer.appendChild(container);
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