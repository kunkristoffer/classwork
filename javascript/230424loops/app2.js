/* looks for updates to the input fields */
const input = document.querySelector("fieldset");
const output = document.getElementById("output");
/* input.addEventListener("input", updateValue);
window.onload = updateValue; */

const dmgInput = document.getElementById("inputLife").value * 1;
const cwdt = [4350,3950,3580,3272,3142,2874,2621,394,2184,1980,1804,1635,1485,1354];

for (let i = 0 ; i < cwdt.length ; i++) {
    output.insertAdjacentHTML('beforeend', `<div>${23 - i}</div>`)
    if (dmgInput <= cwdt[i]) {
        output.insertAdjacentHTML('beforeend', `
            <div style="background-color:red">${cwdt[i]}</div>
            <div style="background-color:red">${Math.floor(cwdt[i] - cwdt[i]*0.2)}</div>
            <div style="background-color:red">${Math.floor(cwdt[i] - cwdt[i]*0.23)}</div>
        `)
    } else {
        output.insertAdjacentHTML('beforeend', `
            <div>${cwdt[i]}</div>
            <div>${Math.floor(cwdt[i] - cwdt[i]*0.2)}</div>
            <div>${Math.floor(cwdt[i] - cwdt[i]*0.23)}</div>
        `)
    }
}

console.log(dmgInput)