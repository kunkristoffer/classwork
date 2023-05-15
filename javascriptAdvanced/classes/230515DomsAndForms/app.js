const outPut = document.getElementById("output")
const buttonSubmit = document.getElementById("input-submit")
const formE1 = document.getElementById("input-form")
const formText = document.getElementById("input-text")
const createDiv = document.createElement("div")
const createOl = document.createElement("ol")

/* function handleButton() {
    const paraE1 = document.querySelector("p")
    const inputE1 = document.getElementById("#text-input")
    const checkE1 = document.getElementById("#checkbox-input")
    outPut.textContent = inputE1.value
}
buttonSubmit.addEventListener("click", handleButton) */

/* function handleForm(event) {
    const outputLI = document.createElement("li")
    const inputValues = formText.textContent
    outputLI.textContent = inputValues
    outPut.appendChild(outputLI)
} */

outPut.append(createOl)

function addTodo(event) {
    // når du bruker submit event sammen med form så må man bruke 
    // event.preventDefault() fra å reloade siden
    event.preventDefault()

    // stops empty entries
    if (formText.value == "") return

    // creates needed elements for creating todo list
    const createLi = document.createElement("li")
    const createP = document.createElement("p")
    const createCheckbox = document.createElement("input");
    const createBtn = document.createElement("button");
    createCheckbox.setAttribute("type", "checkbox");

    // fills created elements with content
    createBtn.textContent = "-"
    createP.textContent = formText.value

    // removes todo entry on click
    // https://stackoverflow.com/questions/46665554/remove-parent-element-on-click-with-plain-javascript
    createBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })

    // adds elements to the Dom
    createLi.append(createCheckbox,createP,createBtn)
    createOl.append(createLi)

    // Clears inputfield after submit
    formText.value = ""
}

formE1.addEventListener("submit", addTodo)
