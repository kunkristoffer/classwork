import {cwdtConfig,updateLocalStorage} from "./data.js"
import {cwdtConfigCreateInput} from "./html.js"

// listens for input changes
document.getElementById("cwdt-config").addEventListener("input", cwdtConfigGetInput);

// Updates Character object with new values
function cwdtConfigGetInput(event) {
 event.preventDefault();
 const cwdtConfigGet = document.getElementById("cwdt-config").elements

 for (let i = 0; i < cwdtConfigGet.length; i++) {
  if (cwdtConfigGet[i].type === "radio" && cwdtConfigGet[i].checked) {
   cwdtConfig.class = cwdtConfigGet[i].id
  } else if (cwdtConfigGet[i].type === "checkbox") {
   cwdtConfig[cwdtConfigGet[i].id] = cwdtConfigGet[i].checked
  } else if (cwdtConfigGet[i].type === "text"){
   cwdtConfig[cwdtConfigGet[i].id] = cwdtConfigGet[i].value
  }
 }
 // Updates localstorage with details on change
 updateLocalStorage();
}

// Creates a form field for character stats input
cwdtConfigCreateInput();