// todolist array
let todolist = []


// form elements
const formEl = document.getElementById("my-form")
const formText = document.getElementById("text-input")

// todo pending elements:
const todoPendingContainer = document.getElementById("todo-pending")

// handle the form
function handleForm(event) {
  event.preventDefault() // prevents page refresh on form submission

  console.log(event.target)


  // check if text has a length of at least 3 characters, and if not return
  if (formText.value.length < 3) return
  
  addTodo(formText.value)
  formText.value = "" // reset text input
}

// create html elements for a pending todo
// function addTodo(text) {

  /* const container = document.createElement("div")
  container.style = "display: flex;"

  const paragraph = document.createElement("p")
  paragraph.textContent = text

  const button = document.createElement("button")
  button.textContent = "Remove todo"

  container.append(paragraph, button)
  todoPendingContainer.appendChild(container) */

  /* todoPendingContainer.innerHTML = `
    <div style="display: flex; ">
      <p>${text}</p>
      <button>Remove todo</button>
    </div>` */
// }

// create html elements for a pending todo
function addTodo(text) {

  // update todolist array with next todo item
  const todoId = Date.now() // trenger vi egentlig denne ?
  todolist.push({
    name: text,
    id: todoId
  })

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