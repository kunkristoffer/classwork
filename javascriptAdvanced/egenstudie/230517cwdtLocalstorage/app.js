// Table of cast when damage taken data
const cwdt = [528, 583, 661, 725, 812, 897, 1003, 1107, 1221, 1354, 1485, 1635, 1804, 1980, 2184, 2394, 2621, 2874, 3142, 3272, 3580, 3950, 4350, 4780, 5240, 5730, 6250, 6800, 7380, 7990, 8310, 8630, 8965, 9300, 9650, 10000, 10365, 10730, 11110, 11490];

// Defines the name of the localstorage key
// let characterStorage = JSON.parse(localStorage.getItem("characterStats")) || []

// loop through todolist array, and with each object create html elements for the todo item.
// todoStorage.forEach((item) => createHtml(item.name, item.state, item.id))

// 
const getEle = (div, type) => document.getElementById(div)[type];
const creEle = (type) => document.createElement(type);

//
const inputField = document.querySelector("fieldset");
const outputField = document.getElementById("cwdt-table");
const debugMessage = document.getElementById("debug");

// 
const characterStats = {
  Class: "saboteur",
  Life: 2000,
  EnergyShield: 200,
  Ward: 1000,
  ChaosResistance: -60,
  Divergent: 0,
  Hearbound: false,
  Skeleton: false,
  ForbiddenRite: false
}

localStorage.setItem("characterStats", JSON.stringify(characterStats))


const cDiv = createEle("div")
inputField.append(cDiv)
cDiv.setAttribute("id", "char-select")

for (const key in characterStats) {
  const cLabel = createEle("label")
  const cInput = createEle("input")
  const cCheck = createEle("input")
  const cRadio = createEle("input")
  const cImg = createEle("img")
  cCheck.setAttribute("type", "checkbox")
  cRadio.setAttribute("type", "radio")
  

  if (key === "Class") {
    continue;
  } else if (typeof characterStats[key] !== 'boolean') {
    cLabel.textContent = key
    cLabel.setAttribute("for", `input${key}`)
    Object.assign(cInput, {
      id: `input${key}`,
      type: typeof characterStats[key],
      required: true
    })
    cInput.value = characterStats[key]
    cLabel.append(cInput)
  } else {
    cLabel.textContent = key
    cCheck.checked = characterStats[key]
    cLabel.append(cCheck)
  }
  cDiv.append(cLabel)
  // console.log(typeof characterStats[key])
}



const test = document.querySelectorAll("input");
// console.log(test)











// Resources:
// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
// https://www.javascripttutorial.net/javascript-remainder-operator/
// https://flexiple.com/javascript/loop-through-object-javascript/
// https://masteringjs.io/tutorials/fundamentals/typeof-number
// https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript