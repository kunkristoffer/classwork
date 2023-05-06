// defining input and output areas
const input = document.querySelector("fieldset");
const output = document.getElementById("cwdt-table");
const debug = document.getElementById("debug");

// adds eventlistener that checks for user inputs
input.addEventListener("input", updateValue);

// Table of cast when damage taken data
const cwdt = [528,583,661,725,812,897,1003,1107,1221,1354,1485,1635,1804,1980,2184,2394,2621,2874,3142,3272,3580,3950,4350,4780,5240,5730,6250,6800,7380,7990,8310,8630,8965,9300,9650,10000,10365,10730,11110,11490];

function updateValue() {
  // initialization of input values
  const inputCharacter = document.getElementById("saboteur").checked;
  const inputLife = document.getElementById("inputLife").value;
  const inputEnergy = document.getElementById("inputEnergy").value;
  const inputWard = document.getElementById("inputWard").value;
  const inputChaos = document.getElementById("inputChaos").value;
  const inputDivergent = document.getElementById("inputDivergent").value;
  const inputHeartbound = document.getElementById("inputHeartbound").checked;
  const inputSkeleton = document.getElementById("inputSkeleton").checked;
  const inputForbiddenrite = document.getElementById("inputForbiddenrite").checked;

  // calculations
  const heartboundDamage = inputHeartbound ? 840 : 420 ;
  const skeletonDamage = inputSkeleton ? heartboundDamage * 4 : heartboundDamage * 3;
  const forbiddenriteDamage = inputForbiddenrite ? ((inputLife * 0.4) + (inputEnergy * 0.25)) * (1-(inputChaos/100)) : 0;
  const totalDamage = inputCharacter ? (skeletonDamage + forbiddenriteDamage) * 2 : (skeletonDamage + forbiddenriteDamage);

    // printing cwdt table to html, but first clear the area
  while(output.firstChild)
  output.removeChild(output.firstChild);

  // Lets generate that table with some nice colors
  for (let i = 0; i < cwdt.length; i++) {
    // Generate values for calc
    const innLevel = i+1;
    const innValue = cwdt[i];
    const innDivergent = Math.floor(cwdt[i]-(cwdt[i] * 20 / 100));
    const innCustom = Math.floor(cwdt[i]-(cwdt[i] * inputDivergent / 100));
    const innMin = Math.min(innValue, innDivergent, innCustom);

    // Starts a fragment
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
    if (innMin*0.9 < totalDamage && innMin*1.5 > totalDamage) {
      if (innValue < totalDamage) {
        fragment.appendChild(outLevel).setAttribute("class", "green");
        fragment.appendChild(outValue).setAttribute("class", "green");
        fragment.appendChild(outDivergent).setAttribute("class", "green");
        fragment.appendChild(outCustom).setAttribute("class", "green");
      } else if (innDivergent < totalDamage) {
        fragment.appendChild(outLevel).setAttribute("class", "green");
        fragment.appendChild(outValue);
        fragment.appendChild(outDivergent).setAttribute("class", "green");
        fragment.appendChild(outCustom).setAttribute("class", "green");
      } else if (innCustom < totalDamage) {
        fragment.appendChild(outLevel).setAttribute("class", "green");
        fragment.appendChild(outValue);
        fragment.appendChild(outDivergent);
        fragment.appendChild(outCustom).setAttribute("class", "green");
      } else {
        fragment.appendChild(outLevel);
        fragment.appendChild(outValue);
        fragment.appendChild(outDivergent);
        fragment.appendChild(outCustom);
      }
    }

    // prints result in html
    // using .prepend because i need to reverse the output so that
    // levels are tied to the correct values
    output.prepend(fragment);
  }
};