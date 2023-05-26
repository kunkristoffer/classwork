// importing important code from data.js and html.js
import {removeCompleted,sortList,completeTodo,removeAll,updateLocalStorage,todolist} from "./data.js"
import {createHtml,formForm,inputForm,outputPending,formClearAll,formPending,formSearch,formSort,formClear} from "./html.js"

// Runs on pageload to print
todolist.forEach((object) => {
 createHtml(object.text, object.date, object.status)
})

function addTodo(text) {
 // update todolist array with next todo item
 const date = Date.now()
 const status = false

 todolist.push({
   text: text,
   date: date,
   status: status
 })
 // update local storage:
 updateLocalStorage()
 createHtml(text, date, status)
}

// sort pending based on criteria
function sortPending(array, orderBy, order) {
 outputPending.textContent = ""
 const sortedList = sortList(array, {
   sortBy: orderBy,
   order: order
 })  

 sortedList.forEach((object) => {
   if (object.status !== true) createHtml(object.text, object.date, object.status)
 })
}
// Filters the pending section from search input
function filterPending(array, term) {
 outputPending.textContent = ""
 const filteredList = array.filter((object) => object.text.toLowerCase().includes(term.toLowerCase()))
 filteredList.forEach((object) => {
   // console.log(todoItem)
   if (object.status !== true) createHtml(object.text, object.date, object.status)
 })
}

// Listens for inputs and adds them to the todolist on submit
formForm.addEventListener("submit", (event) => {
 event.preventDefault()
 if (inputForm.value.length < 3) return
 
 addTodo(inputForm.value)
 inputForm.value = "" // reset text input
})

// Changes how pending todo items are sorted
formSort.addEventListener("change", () => {
 const optionIndex = formSort.selectedIndex;
 const sortBy = formSort.options[optionIndex].dataset.sortby
 const sortDir = formSort.options[optionIndex].dataset.sortdir
 sortPending(todolist, sortBy, sortDir)
});

// attaches eventlistener that searches all pending tasks
formSearch.addEventListener("input", (event) => {
  filterPending(todolist, event.target.value)
})

formSearch.addEventListener("input", (event) => {
 filterPending(todolist, event.target.value)
})

// attaches eventlistener that removes all completed tasks
formClear.addEventListener("click", removeCompleted)
// attaches eventlistener that removes all tasks
formClearAll.addEventListener("click", removeAll)