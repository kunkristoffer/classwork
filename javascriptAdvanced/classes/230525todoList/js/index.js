import { todolist, updateLocalStorage, updateTodoArray, sortList, formatDate, removeCompleted } from "./data.js"
import { createTodoPendingHtml, createTodoCompletedHtml, sortPendingTodos} from "./html.js"

// define DOMs
const htmlInput = document.getElementById("input")
const htmlOutput = document.getElementById("output")
const formElement = document.getElementById("form-element")
const formInput = document.getElementById("form-input")
const formSearch = document.getElementById("form-search")
const formSort = document.getElementById("form-sort")
const todoPending = document.getElementById("todo-pending")
const todoCompleted = document.getElementById("todo-completed")
const sortBtn = document.getElementById("form-sort")
const todoClear = document.getElementById("todo-clear")

// run on page load
todolist.forEach((todoItem) => {
 if (todoItem.isCompleted !== true) createTodoPendingHtml(todoItem.name, todoItem.id)
 else createTodoCompletedHtml(todoItem.name, todoItem.id)
})

/**
 * Adds a todo item from the input field
 * @param {*} formText 
 */
function addTodo(formText) {
 // update todolist array with next todo item
 const todoId = Date.now()
 todolist.push({
   name: formText,
   id: todoId,
   isCompleted: false
 })
 
 // update local storage:
 updateLocalStorage()
 createTodoPendingHtml(formText, todoId)
}

// handle the form
function handleForm(event) {
 // prevents page refresh on form submission
 event.preventDefault()
  
 // todo: create an error element to display error to user::
 if (formInput.value.length < 3) return
 
 addTodo(formInput.value)
 formInput.value = "" // reset text input
}

// attaches eventlistener to main input
formElement.addEventListener("submit", handleForm)

// attaches eventlistener that removes all completed tasks
todoClear.addEventListener("click", removeCompleted)

// Changes how pending todo items are sorted
sortBtn.addEventListener("change", () => {
 const optionIndex = sortBtn.selectedIndex;
 const sortBy = sortBtn.options[optionIndex].dataset.sortby
 const sortDir = sortBtn.options[optionIndex].dataset.sortdir

 sortPendingTodos(todolist, sortBy, sortDir)

 // Had a hard time with this one, but this stackoverflow post pushed me in the right direction
 // https://stackoverflow.com/questions/61246900/get-data-attribute-of-the-selected-option
});