// Prepares to create/find dom elements
const outPut = document.getElementById("output")
const createBtn = document.createElement("button");
const buttonSubmit = document.getElementById("input-submit")
const formE1 = document.getElementById("input-form")
const formText = document.getElementById("input-text")
const createDiv = document.createElement("div")
const createOl = document.createElement("ol")
outPut.append(createOl)

// Defines the name of the localstorage key
const localStorageKey = "todolistproject"
let todoStorage = JSON.parse(localStorage.getItem(localStorageKey)) || []

// loop through todolist array, and with each object create html elements for the todo item.
todoStorage.forEach((item) => createTodoHtml(item.name, item.id))


// template for how todo list items will be added as html
function createTodoHtml(text, id) {
    // creates needed elements for creating todo list
    const createLi = document.createElement("li")
    const createP = document.createElement("p")
    const createCheckbox = document.createElement("input");
    const createBtn = document.createElement("button");

    // fills created elements with content
    createBtn.textContent = "-"
    createP.textContent = text
    createCheckbox.setAttribute("type", "checkbox");

    // removes todo entry on click
    createBtn.addEventListener("click", () => removeTodo(createLi, id))

    // adds elements to the Dom
    createLi.append(createCheckbox,createP,createBtn)
    createOl.append(createLi)
}


// adds an element passed from handleSubmit and creates an entry
function addTodo(text) {
    // Generates a unique number for use as ID
    let uniqueID = Date.now()

    // Fetch values from input and inserts into array
    todoStorage.push({
        name: text,
        id: uniqueID
    })
    // updates localstorage with new array
    localStorage.setItem(localStorageKey, JSON.stringify(todoStorage))
       
    // calls on createTodoHtml
    createTodoHtml(text, uniqueID)
}


// Removes an element from array, updates localstorage after
function removeTodo(element, id) {
    // update todolist array with the removed item removed
    // remove the item that matches the todoId condition 
    todoStorage = todoStorage.filter((item) => item.id !== id)

    // update local storage:
    localStorage.setItem(localStorageKey, JSON.stringify(todoStorage))
  
    // removes element
    element.remove()
}


// Starts events when clicking on submit button
function handleSubmit(event) {
    // når du bruker submit event sammen med form så må man bruke 
    // event.preventDefault() fra å reloade siden
    event.preventDefault()

    // stops empty entries
    if (formText.value == "") return

    // runs addTodo and passes the input fields value
    addTodo(formText.value)

    // Clears input field after submit
    formText.value = ""
}


// Clears the todo list information from local storage, array and refreshes page
function clearTodo() {
    // clears the todo list
    localStorage.clear()
    todoStorage = []

    // reloads window
    location.reload();
}


// Adds event listener to submit button on the form
formE1.addEventListener("submit", handleSubmit)