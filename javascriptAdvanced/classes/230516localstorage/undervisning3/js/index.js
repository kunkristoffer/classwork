"use strict"

import { createTodoPendingHtml } from "./todoPending.js"
import { createTodoCompletedHtml } from "./todoCompleted.js"
import { todolist, updateLocalStorage } from "./data.js"

// form elements
const formEl = document.getElementById("my-form")
const formText = document.getElementById("text-input")

// on page load:
// loop through todolist array, and with each object create html elements for the todo item.
todolist.forEach((todoItem) => {
  if (todoItem.isCompleted !== true) createTodoPendingHtml(todoItem.name, todoItem.id)
  else createTodoCompletedHtml(todoItem.name, todoItem.id)
})
// create html elements for a pending todo
function addTodo(text) {
  // update todolist array with next todo item
  const todoId = Date.now() // trenger vi egentlig denne ?
  todolist.push({
    name: text,
    id: todoId,
    isCompleted: false
  })
  // update local storage:
  updateLocalStorage()

  createTodoPendingHtml(text, todoId)
}

// handle the form
function handleForm(event) {
  event.preventDefault() // prevents page refresh on form submission
  // todo: create an error element to display error to user::
  if (formText.value.length < 3) return
  
  addTodo(formText.value)
  formText.value = "" // reset text input
}

formEl.addEventListener("submit", handleForm)



function sortList(list, options) {
  // destructure the options object:
  const { sortBy, order } = options

  // create a new array using the spread operator to avoid side-effects
  const sortedList = [...list]

  const sortOrder = order === "asc" ? 1 : -1

  sortedList.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1 * sortOrder
    else if(a[sortBy] < b[sortBy]) return -1 * sortOrder
    
    return 0
  })

  return sortedList
}

// search and filter functionality:
// should be moved to a different file ?

const sortNameAscBtn = document.getElementById("sort-name-asc")
const sortNameDescBtn = document.getElementById("sort-name-desc")

sortNameAscBtn.addEventListener("click", () => sortPendingTodos(todolist, "name", "asc"))
sortNameDescBtn.addEventListener("click", () => sortPendingTodos(todolist, "name", "desc"))

function sortPendingTodos(array, orderBy, order) {
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

  todoPendingContainer.innerHTML = ""

  sortedList.forEach((todoItem) => {
    // console.log(todoItem)
    if (todoItem.isCompleted !== true) createTodoPendingHtml(todoItem.name, todoItem.id)
  })

}