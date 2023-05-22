// defining DOM fields
const inputField = document.getElementById("inputJS")
const outputField = document.getElementById("outputJS")

// Create elements
const cDiv = document.createElement("div")
const cFld = document.createElement("fieldset")
const cLeg = document.createElement("legend")
const cLab = document.createElement("label")
const cInp = document.createElement("input")
const cPar = document.createElement("p")
const cBtn = document.createElement("button")
const cSub = document.createElement("button")
cSub.setAttribute("type", "submit")

// localstorage key name
const localStorageKey = "characterData"

// Loads user data from localstorage og generates a default template
const characterStats = JSON.parse(localStorage.getItem(localStorageKey)) || {
    Build: "saboteur",
    Life: 2000,
    EnergyShield: 200,
    Ward: 1000,
    ChaosResistance: -60,
    Divergent: 0,
    Hearbound: false,
    Skeleton: true,
    ForbiddenRite: true
}

// localStorage.setItem(localStorageKey, JSON.stringify(characterStats))
// loop through todolist array, and with each object create html elements for the todo item.
// inputData.forEach((item) => createTodoHtml(item.name, item.state, item.id))





function generateInputFields() {
    // Adds inputfield to DOM
    cLeg.textContent = "Configuration"
    cDiv.setAttribute("class", "Char-select")
    cSub.textContent = "Submit"

    for (const key in characterStats) {
        // defines elements to be created
        const cLab = document.createElement("label")
        const cInp = document.createElement("input")
        const cChk = document.createElement("input")
        const cRad = document.createElement("input")
        const cImg = document.createElement("img")
        cChk.setAttribute("type", "checkbox")
        cRad.setAttribute("type", "radio")
        
        // loops over elements in character stats and creates elements based on type
        if (key === "Build") {
            // if item is 
            cInp.value = characterStats[key]
            Object.assign(cInp, {
                id: `input${key}`,
                name: key,
                type: typeof characterStats[key],
                required: true
            })
        } else if (typeof characterStats[key] !== 'boolean') {
            // If item is NOT boolean
            cLab.textContent = key
            cLab.setAttribute("for", `input${key}`)
            Object.assign(cInp, {
                id: `input${key}`,
                name: key,
                type: typeof characterStats[key],
                required: true
            })
            cInp.value = characterStats[key]
            cLab.append(cInp)
        } else {
            cLab.textContent = key
            cLab.setAttribute("for", `input${key}`)
            Object.assign(cChk, {
                id: `input${key}`,
                name: key,
                type: "checkbox",
                checked: characterStats[key]
            })
            cLab.append(cChk)
        }
        cDiv.append(cLab)
        // console.log(typeof characterStats[key])
    }


    // adds output to the DoM form
    inputField.append(cFld)
    cFld.append(cLeg,cDiv)
    cDiv.append(cSub)
}

function updateInputFields(event) {
    // stops reloading
    event.preventDefault()

    const characterInputs = document.querySelectorAll("input")
    const inputLife = document.getElementById("inputLife")

    cPar.textContent = "submitted, awaiting reload"
    inputField.append(cPar)

    for(let item of Object.keys(characterInputs)) {
        console.log(item)
    }


    for (const key in characterInputs) {
        // console.log(characterInputs[key].name + characterInputs[key].value)
    }
    
    /* [characterInputs].forEach((key) => {
        
    })  */   

    // Fills localstorage with tmp data !!!
    // localStorage.setItem(localStorageKey, JSON.stringify(characterStats))
}

inputField.addEventListener("submit", updateInputFields)

// Runs on startup, generates inputfields
generateInputFields();


// event #
// 1: JS has initial values for inputfield, inputfields are generated
// 2: user changes inputfield values, submit updates values in array and .pushes localstorage
// 3: 
// 4: 
// 5: 
// 6: 
// 7: 
// 8: 
// 9: https://images-ext-1.discordapp.net/external/UeEMFX72pFrG9YB9XtQ0gELG3Zvs1ycDC5A1qwlLGVo/https/i.imgur.com/ekT58Cv.png





// Dead end - formdata can't handle unckecked-boxes
/* function handleFormSubmit(event) {
    // Prevent page reload
    event.preventDefault();
    // Creates an object with all data from inputs
    const data = new FormData(event.target);
    // Converts data to JSON
    const formJSON = Object.fromEntries(data.entries());
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    //outputField.innerText = JSON.stringify(formJSON, null, 2);
    localStorage.setItem("test", JSON.stringify(formJSON))
    console.log(data)
  } */

// Resources
// https://developer.mozilla.org/en-US/docs/Web/API/FormData