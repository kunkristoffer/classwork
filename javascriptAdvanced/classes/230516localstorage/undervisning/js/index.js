

//let text = "hei"



// skriv til local storage:
//localStorage.setItem("message", text)

// les fra local storage:
//let dataFromLocalStorage = localStorage.getItem("message")
//console.log(dataFromLocalStorage)

//console.log(localStorage.length)


// fjern en item fra localstorage
//localStorage.removeItem("message")

// fjern all data fra localstorage (i denne domain)
//localStorage.clear()

let myTask = {
  name: "task2",
  id: 1684220752608,
  doit() {
    console.log("doing task2")
  }
}




//localStorage.setItem("message", myTask)

//let dataFromLocalStorage = localStorage.getItem("message")
//console.log(dataFromLocalStorage)

//let myTaskAsJSON = JSON.stringify(myTask)

//console.log(myTaskAsJSON)

//let myJSONDataAsObject = JSON.parse(myTaskAsJSON)

//console.log(myJSONDataAsObject.doit())

// {"name":"task2","id":1684220752608}
// {"name": "task2","id":1684220752608}






// form elements
const formEl = document.getElementById("my-form")
const formText = document.getElementById("text-input")

// todo pending elements:
const todoPendingContainer = document.getElementById("todo-pending")

// local storage key for this app:
const localStorageKey = "todolistProject1"

// todolist array
// let todolist = []

// on page load:
// update todolist array with data from localstorage
//todolist = localStorage.getItem(localStorageKey)

//if (localStorage.getItem(localStorageKey)) 
//  todolist = localStorage.getItem(localStorageKey)

let todolist = JSON.parse(localStorage.getItem(localStorageKey)) || []

//let aaa = null || undefined || 0 || "a" || 5

//console.log(aaa)

//console.log(doWehaveData)

// loop through todolist array, and with each object create html elements for the todo item.
todolist.forEach((todoItem) => createTodoHtml(todoItem.name, todoItem.id))


// handle the form
function handleForm(event) {
  event.preventDefault() // prevents page refresh on form submission

  if (formText.value.length < 3) return
  
  addTodo(formText.value)
  formText.value = "" // reset text input
}

// create html elements for a pending todo
function addTodo(text) {
  // update todolist array with next todo item
  const todoId = Date.now() // trenger vi egentlig denne ?
  todolist.push({
    name: text,
    id: todoId
  })
  // update local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolist))

  createTodoHtml(text, todoId)
}

// create a todoitem html element
function createTodoHtml(text, todoId) {
  // create html elements:
  const container = document.createElement("div")
  container.style = "display: flex;"

  const paragraph = document.createElement("p")
  paragraph.textContent = text

  const button = document.createElement("button")
  button.textContent = "Remove todo"

  // add event listener to the remove todo button
  button.addEventListener("click", () => removeTodo(container, todoId))

  container.append(paragraph, button)
  todoPendingContainer.appendChild(container)
}

// removes a pending todo item element from the page and the array
function removeTodo(element, todoId) {
  // update todolist array with the removed item removed
  //console.log(todoId, element)
  todolist = todolist.filter((todo) => todo.id !== todoId) // remove the item that matches the todoId condition 
  // update local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolist))

  element.remove()
}

formEl.addEventListener("submit", handleForm)


































const buttonSubmit = document.getElementById("btn-submit")






































function handleButton() {
  //const paragraphEl = document.querySelector("#paragraph")
  // console.log("The text says: " + paragraphEl.textContent)

  /* const inputEl = document.querySelector("#text-input")

  console.log(inputEl)

  let doubleNum = inputEl.value * 2

  console.log("Double value is: " + doubleNum) */

  const radioEl = document.getElementById("radio")

  console.log("radio value: " + radioEl.value)
  console.log("radio checked: " + radioEl.checked)
}

//buttonSubmit.addEventListener("click", handleButton)