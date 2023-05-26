// importing important code from data.js
import {sortList,formatDate,completeTodo,todolist} from "./data.js"

// defining DOM objects
export const formForm = document.getElementById("form") // moon-moon
export const inputForm = document.getElementById("form-input")
export const outputPending = document.getElementById("pending")
export const outputCompleted = document.getElementById("completed")
export const formPending = document.getElementById("form-pending")
export const formSearch = document.getElementById("form-search")
export const formSort = document.getElementById("form-sort")
export const formClear = document.getElementById("form-clear")
export const formClearAll = document.getElementById("form-clear-all")

/**Creates html from array keys and appends to either pending or completed based on object.status
 * @param {*} text object.text
 * @param {*} date object.date
 * @param {*} status object.status*/
export function createHtml(text, date, status) {
 const container = document.createElement("div");
 const paragraph = document.createElement("p");
 const timeCreated = document.createElement("span");
 const button = document.createElement("button");
 paragraph.textContent = text;
 timeCreated.textContent = formatDate(date);

 if (status) {
  container.append(paragraph, timeCreated);
  outputCompleted.appendChild(container);
 } else {
  // add event listener to the remove todo button
  button.textContent = "Complete";
  button.addEventListener("click", () => completeTodo(container, text, date));
  container.append(paragraph, timeCreated, button);
  outputPending.appendChild(container);
 }
}