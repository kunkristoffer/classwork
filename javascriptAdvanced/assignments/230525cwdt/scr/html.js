import {} from "./index.js"
import {cwdtConfig,cwdtConfigClasses,cwdt,totalDamage,updateCalculations, skeletonDamage} from "./data.js"


// define DOM objects
export const cwdtConfigInput = document.getElementById("cwdt-config")
export const cwdtContent = document.getElementById("cwdt-content")

export function cwdtConfigCreateInput() {
 // create elements
 const createDiv = document.createElement("div")
 const createDebug = document.createElement("div")
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
 createDebug.id = "cwdt-debug"
 createButton.textContent = "Calculate"
 cwdtConfigInput.append(createButton, createDebug)
}




export function cwdtContentCreateTable() {
 updateCalculations();
 cwdtContent.textContent = ""
 for (let i = 0; i < cwdt.length; i++) {
  // Generate values for calc
  const innLevel = i + 1;
  const innValue = cwdt[i];
  const innDivergent = Math.floor(cwdt[i] - (cwdt[i] * 20) / 100);
  const innCustom = Math.floor(cwdt[i] - (cwdt[i] * cwdtConfig.divergentpercent) / 100);
  const innMin = Math.min(innValue, innDivergent, innCustom);

  // Using fragment to combine all changes before pushing to html
  const fragment = document.createDocumentFragment();

  // Generates divs for html
  const outLevel = document.createElement("div");
  const outValue = document.createElement("div");
  const outDivergent = document.createElement("div");
  const outCustom = document.createElement("div");

  // Fills divs with content
  outLevel.textContent = innLevel;
  outValue.textContent = innValue;
  outDivergent.textContent = innDivergent;
  outCustom.textContent = innCustom;

  // color green if bellow threshold
  if (innMin * 0.9 < totalDamage && innMin * 1.5 > totalDamage) {
    fragment.append(outLevel, outValue, outDivergent, outCustom);

    if ((innValue || innDivergent || innCustom) < totalDamage)
      fragment.appendChild(outLevel).setAttribute("class", "green");
    if (innValue < totalDamage)
      fragment.appendChild(outValue).setAttribute("class", "green");
    if (innDivergent < totalDamage)
      fragment.appendChild(outDivergent).setAttribute("class", "green");
    if (innCustom < totalDamage)
      fragment.appendChild(outCustom).setAttribute("class", "green");
  }

  // prints result in html
  // using .prepend because i need to reverse the output so that
  // levels are tied to the correct values
  cwdtContent.prepend(fragment);
 }
}
