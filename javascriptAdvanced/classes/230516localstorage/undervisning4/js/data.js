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



// kode nedenfor er implementeringer av forEach, .map metodene som funksjoner for å vise hvordan de egentlig fungerer.


// array .forEach metoden
todolist.forEach(function(value, index) {
  //console.log(value.name + " is at position " + index)
})

// forHver funksjonen fungerer nesten helt likt som array.forEach
// den tar imot to argumenter: et array, og en funksjons-definisjon
function forHver(array, callback) {
  // parameteret callback er funksjons-definisjonen
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // mens vi looper gjennom arrayet kjører vi callback
    // med dette elementet og index som argumenter
    callback(element, index)
  }
}

/* forHver(todolist, function(element, index) {
  console.log(element.name + " is at position " + index)
}) */

//forHver(todolist, printTodo)


function printTodo(todoItem) {
  console.log(todoItem)
}


function map(array, callback) {
  const newArray = [] // [...array]
  // feilen i denne funksjonen var linjen over
  // vi vil ikke lage et nytt array og fylle det med data fra det gamle arrayet, 
  // istedet vil vi lage bare et tomt array her, og senere i for loopen pusher vi til det nye arrayet
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callback(element, index))
  }

  return newArray
}

//const uppercaseNames = todolist.map((todoItem) => todoItem.name.toUpperCase())
// console.log(uppercaseNames)
const uppercaseNames = map(todolist, (todoItem) => todoItem.name.toUpperCase())

console.log(uppercaseNames)