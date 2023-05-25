"use strict"
// 1. eksempel på import/export "default":
// import myNum from "./todoPending.js"
// console.log(myNum)

// 2. eksempel på "named" import/export:
//import { myFunc, myNum } from "./todoPending.js"
//console.log(myNum)
//myFunc()

import { createTodoHtml } from "./todoPending.js"
import { todolist, updateLocalStorage } from "./data.js"

export let test = 222

// form elements
const formEl = document.getElementById("my-form")
const formText = document.getElementById("text-input")

// on page load:
// loop through todolist array, and with each object create html elements for the todo item.
todolist.forEach((todoItem) => createTodoHtml(todoItem.name, todoItem.id))

// create html elements for a pending todo
function addTodo(text) {
  // update todolist array with next todo item
  const todoId = Date.now() // trenger vi egentlig denne ?
  todolist.push({
    name: text,
    id: todoId
  })
  // update local storage:
  updateLocalStorage()

  createTodoHtml(text, todoId)
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


// todo: options is an object, needs default params
function sortList(list, options) {

  // sortBy = "id", order = "asc"

  console.log(options)

  // create a new array using the spread operator to avoid side-effects
  const sortedList = [...list]

  /* const sortOrder = order === "asc" ? 1 : -1

  sortedList.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1 * sortOrder
    else if(a[sortBy] < b[sortBy]) return -1 * sortOrder
    
    return 0
  }) */

  return sortedList
}