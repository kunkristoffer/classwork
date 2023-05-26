// importing important code from data.js
import {sortList,formatDate,completeTodo,todolist,removeTodo} from "./data.js"

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
 const button1 = document.createElement("button");
 const button2 = document.createElement("button");
 const buttonGroup = document.createElement("div");
 const detailGroup = document.createElement("div");
 paragraph.textContent = text;
 timeCreated.textContent = formatDate(date);
 timeCreated.classList.add("date")

 if (status) {
  container.append(paragraph, timeCreated);
  outputCompleted.appendChild(container);
 } else {
  // add event listener to the remove todo button
  button1.textContent = "✔️";
  button1.addEventListener("click", () => completeTodo(container, text, date));
  button2.textContent = "❌";
  button2.addEventListener("click", () => removeTodo(container, text, date));
  buttonGroup.append(button1, button2)
  detailGroup.append(timeCreated, buttonGroup)
  container.append(paragraph, detailGroup);
  outputPending.appendChild(container);
 }
}