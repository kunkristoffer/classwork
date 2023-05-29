import {cwdtConfig,updateLocalStorage,forbiddenDamage,updateCalculations} from "./data.js"
import {cwdtConfigCreateInput,cwdtConfigInput,cwdtContentCreateTable} from "./html.js"

// listens for input changes
document.getElementById("cwdt-config").addEventListener("input", (event) => {
 // Stops page reloading
 event.preventDefault();
 // Creates Inputs
 cwdtConfigGetInput();
 // Creates table
 cwdtContentCreateTable(); 
 // Warns if you're taking too much damage
 cwdtWarning();
 // Updates localstorage with details on change
 updateLocalStorage();
});



// Updates Character object with new values
function cwdtConfigGetInput(event) {
 const cwdtConfigGet = document.getElementById("cwdt-config").elements

 // updates cwdtConfigGet with fresh values
 for (let i = 0; i < cwdtConfigGet.length; i++) {
  if (cwdtConfigGet[i].type === "radio" && cwdtConfigGet[i].checked) {
   cwdtConfig.class = cwdtConfigGet[i].id
  } else if (cwdtConfigGet[i].type === "checkbox") {
   cwdtConfig[cwdtConfigGet[i].id] = cwdtConfigGet[i].checked
  } else if (cwdtConfigGet[i].type === "text"){
   cwdtConfig[cwdtConfigGet[i].id] = cwdtConfigGet[i].value
  }
 }
}


 // Warns if you're taking chaos damage
function cwdtWarning() {
 const warning = document.getElementById("cwdt-debug")
 if (forbiddenDamage - cwdtConfig.ward > 0) {
  warning.textContent = `${Math.round(
   forbiddenDamage - cwdtConfig.ward
  )} dmg taken to life`;
 }
}



// Generates inputfields on load
cwdtConfigCreateInput()
cwdtContentCreateTable()
cwdtWarning()



//test
const testerOut = document.getElementById("cwdt-debug")
const testerBtn = document.createElement("button")
testerBtn.textContent = "click"
testerBtn.style.scale = 3
testerBtn.addEventListener("click", (event) => {
 event.preventDefault();
 tester()
});
//testerOut.append(testerBtn)

function tester() {
 console.log(cwdtConfig.ward)
}