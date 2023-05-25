// local storage key for this app:
const localStorageKey = "todolistProject1"

// on page load, first declare and assign todolist var to either localStorage data or an empty array
export let todolist = JSON.parse(localStorage.getItem(localStorageKey)) || []

export function updateLocalStorage() {
  // update local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolist))
}

// remove the item that matches the todoId condition 
export function updateTodoArray(todoId) {
  todolist = todolist.filter((todo) => todo.id !== todoId) 
}