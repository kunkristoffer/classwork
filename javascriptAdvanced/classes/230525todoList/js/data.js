// local storage key for this app:
const localStorageKey = "todolistV2"

/**
 * on page load, first declare and assign todolist var to either localStorage data or an empty array
 */
export let todolist = JSON.parse(localStorage.getItem(localStorageKey)) || []

/**
 * update local storages with data from array, doesn't take any arguments
 */
export function updateLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(todolist))
}

/**
 * convert and return the given date (or timestamp) as human readable datetimetext
 * @param {*} date 
 * @returns 
 */
export function formatDate(date) {
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
 * Updates array
 * @param {*} todoId 
 */
export function updateTodoArray(todoId) {
 todolist = todolist.map((todo) => {
   if (todoId === todo.id) {
     return {
       ...todo,
       isCompleted: true
     }
   }
   else return todo
 })
}

/**
 * 
 * @param {*} list 
 * @param {*} options 
 * @returns 
 */
export function sortList(list, options) {
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