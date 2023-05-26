import {outputPending,outputCompleted,formClearAll,createHtml} from "./html.js"

/** contains localstorage string key value */
const localStorageKey = "myTodoList"

/** Fetches todolist array from localstorage or creates new empty */
export let todolist = JSON.parse(localStorage.getItem(localStorageKey)) || []

/** Updates localstorage with data from array */
export function updateLocalStorage() {
 localStorage.setItem(localStorageKey, JSON.stringify(todolist))
}

/**converts date.now() to human readable format
 * @param {*} date date.now()
 * @returns dateTimeInstance */
export function formatDate(date) {
 const dateTimeOptions = {
   year: "numeric",
   month: "numeric",
   day: "numeric",
   hour: "numeric",
   minute: "numeric",
 }
 const dateTimeInstance = new Intl.DateTimeFormat("no-NO", dateTimeOptions).format(date);
 return dateTimeInstance
}

/**Marks selected item as "Completed" in the array
 * @param {*} date object.id from todolist*/
export function updateTodoArray(date) {
 todolist = todolist.map((todo) => {
   if (date === todo.date) {
     return {
       ...todo,
       status: true
     }
   }
   else return todo
 })
}

/**Sorts the array based options params
 * @param {*} list array to sort
 * @param {*} options deconstructs into; sortBy and order
 * @returns a new sorted list*/
export function sortList(list, options) {
 // destructure the options object:
 const { sortBy, order } = options
 // create a new array using the spread operator to avoid side-effects
 const sortedList = [...list]
 const sortOrder = order === "asc" ? 1 : -1
 // sort algorithm
 sortedList.sort((a, b) => {
   if (a[sortBy] > b[sortBy]) return 1 * sortOrder
   else if(a[sortBy] < b[sortBy]) return -1 * sortOrder
   
   return 0
 })
 return sortedList
}

/**Completes a todo item and removes it from the pending container 
 * @param {*} element DOM parent container
 * @param {*} text todo text
 * @param {*} date todo date/id*/
export function completeTodo(element, text, date) {
 updateTodoArray(date)
 updateLocalStorage()
 element.remove()
 createHtml(text, date, true)
}

/**Removes all objects marked with completed */
export function removeCompleted() {
 outputCompleted.textContent = ""
 todolist = todolist.filter((obj) => {
  return obj.status !== true;
 })
 updateLocalStorage()
}

export function removeAll() {
 if (confirm("This cannot be undone") == true) {
  outputPending.textContent = ""
  outputCompleted.textContent = ""
  todolist = []
  updateLocalStorage()
 }
}