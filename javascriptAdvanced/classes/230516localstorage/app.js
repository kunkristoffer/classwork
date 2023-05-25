// Prepares to create/find dom elements
const outPut = document.getElementById("output")
const createBtn = document.createElement("button");
const buttonSubmit = document.getElementById("input-submit")
const formE1 = document.getElementById("input-form")
const formText = document.getElementById("input-text")
const createDiv = document.createElement("div")
const createOl = document.createElement("ol")
outPut.append(createOl)

// Adds event listener to submit button on the form
formE1.addEventListener("submit", handleSubmit)

// Defines the name of the localstorage key
const localStorageKey = "todoItem"
let todoStorage = JSON.parse(localStorage.getItem(localStorageKey)) || []

// loop through todolist array, and with each object create html elements for the todo item.
todoStorage.forEach((item) => createTodoHtml(item.name, item.state, item.id))


// template for how todo list items will be added as html
function createTodoHtml(text, stateCheck, uniqueID) {
    // creates needed elements for creating todo list
    const createLi = document.createElement("li")
    const createP = document.createElement("p")
    const createCheckbox = document.createElement("input");
    const createBtn = document.createElement("button");

    // fills created elements with content
    createBtn.textContent = "-"
    createP.textContent = text

    // checks state of checkbox
    createCheckbox.setAttribute("type", "checkbox");
    createCheckbox.checked = stateCheck
    
    // checks if checkbox is clicked
    createCheckbox.addEventListener("click", () => updateTodo(uniqueID))

    // removes todo entry on click
    createBtn.addEventListener("click", () => removeTodo(createLi, uniqueID))

    // adds elements to the Dom
    createLi.append(createCheckbox,createP,createBtn)
    createOl.append(createLi)
}


// adds an element passed from handleSubmit and creates an entry
function addTodo(text) {
    // Generates a unique number for use as ID
    let uniqueID = Date.now()
    let stateCheck = false

    // Fetch values from input and inserts into array
    todoStorage.push({
        name: text,
        state: stateCheck,
        id: uniqueID
    })
    // updates localstorage with new array
    localStorage.setItem(localStorageKey, JSON.stringify(todoStorage))
       
    // calls on createTodoHtml
    createTodoHtml(text, stateCheck, uniqueID)
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

// Updates an element if checkbox is clicked
function updateTodo(uniqueID) {
    let todoStorageIndex = todoStorage.findIndex(item => item.id === uniqueID);

    if (todoStorage[todoStorageIndex].state) {
        todoStorage[todoStorageIndex].state = false
    } else {
        todoStorage[todoStorageIndex].state = true
    }
    // updates localstorage with new array
    localStorage.setItem(localStorageKey, JSON.stringify(todoStorage))
    console.log(todoStorage[todoStorageIndex].state)
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


// sorts the todo array
function sortTodo(list, sortBy, sortOrder) {
    const sortedList = [...list]
    const sortOrder = order === "asc" ? 1 : -1
    sortedList.sort((a,b) => {
        if (a[sortBy] > b[sortBy]) return 1 * sortOrder
        else if (a[sortBy] < b[sortBy]) return -1 * sortOrder
        return 0
    })
    return sortedList;
}

// todolist.sort((1,b) => b.id - a.id) funker også, men bare på tall

















// litt bonus fra undervisning 230522
// denne funksjonen påvirker variabelen som ligger utenfor
let a = 5
function test() {
    a = 20
}
test()
console.log(a)

// denne funksjonen påvirker IKKE 
let b = 5
function test2(num) {
    return num * 2
}
test2()
console.log(test2(b))

//
let nums = [1,2,3,4,5]

function doubleNums(array) {
    const newArray = [...array]
    for (let index = 0; index < array.length; index++) {
        array[index] *= 2
    }
    return newArray
}

console.log(doubleNums(nums))
console.log(nums)