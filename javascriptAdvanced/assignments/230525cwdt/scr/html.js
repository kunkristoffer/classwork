import {} from "./index.js"
import {cwdtConfig,cwdtConfigClasses} from "./data.js"


// define DOM objects
const cwdtConfigInput = document.getElementById("cwdt-config")

export function cwdtConfigCreateInput() {
 // create elements
 const createDiv = document.createElement("div")
 const createButton = document.createElement("button")
 cwdtConfigInput.append(createDiv)
 for (const property in cwdtConfig) {
  const createLabel = document.createElement("label")
  const createInput = document.createElement("input")
  if (property === "class") {
   // Creates class select images
   for (let i = 0; i < cwdtConfigClasses.length; i++) {
    const createLabel2 = document.createElement("label")
    const createInput2 = document.createElement("input")
    const createImg2 = document.createElement("img")
    
    createLabel2.classList.add(cwdtConfigClasses[i])
    createImg2.src = `media/img/${cwdtConfigClasses[i]}.png`
    createInput2.id = cwdtConfigClasses[i]
    createInput2.name = "class"
    createInput2.type = "radio"
    createInput2.checked = cwdtConfigClasses[i] === cwdtConfig[property] ? true : false
    createDiv.id = "class-select"
    createLabel2.append(createInput2,createImg2)
    createDiv.append(createLabel2)
   }
  } else if (typeof cwdtConfig[property] === "boolean") {
   // Creates checkbox inputfields
   createLabel.textContent = property
   createLabel.classList.add(property)
   createInput.id = property
   createInput.setAttribute("type", "checkbox")
   createInput.checked = cwdtConfig[property]
   createLabel.append(createInput)
  } else {
   // Creates remaining inputfields
   createLabel.classList.add(property)
   createLabel.textContent = property
   createInput.id = property
   createInput.value = cwdtConfig[property]
   createLabel.append(createInput)
 }
  cwdtConfigInput.append(createLabel)
 }
 createButton.textContent = "Calculate"
 cwdtConfigInput.append(createButton)
}