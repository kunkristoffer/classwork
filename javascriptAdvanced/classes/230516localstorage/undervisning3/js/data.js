// local storage key for this app:
const localStorageKey = "todolistProject1"

// on page load, first declare and assign todolist var to either localStorage data or an empty array
export let todolist = JSON.parse(localStorage.getItem(localStorageKey)) || []

export function updateLocalStorage() {
  // update local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolist))
}

/**
 * update the item that matches the todoId condition, and sets it as isCompleted to true
 * @param {*} todoId - a todo Id
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