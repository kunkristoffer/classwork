// defining input and output areas
const input = document.querySelector("fieldset");
const output = document.getElementById("cwdt-table");
const debugField = document.getElementById("debug");
const inputs = (div, type) => document.getElementById(div)[type];

// adds eventlistener that checks for user inputs
input.addEventListener("input", updateValue);

// Table of cast when damage taken data
const cwdt = [528, 583, 661, 725, 812, 897, 1003, 1107, 1221, 1354, 1485, 1635, 1804, 1980, 2184, 2394, 2621, 2874, 3142, 3272, 3580, 3950, 4350, 4780, 5240, 5730, 6250, 6800, 7380, 7990, 8310, 8630, 8965, 9300, 9650, 10000, 10365, 10730, 11110, 11490,
];

// Updates values and prints table
function updateValue() {
  // fetches character stats from input fields
  const stats = {
    character: inputs("saboteur", "checked"),
    life: inputs("inputLife", "value"),
    energy: inputs("inputEnergy", "value"),
    ward: inputs("inputWard", "value"),
    chaos: inputs("inputChaos", "value"),
    diver: inputs("inputDivergent", "value"),
    heart: inputs("inputHeartbound", "checked") ? 840 : 420,
    skeleton: inputs("inputSkeleton", "checked") ? 4 : 3,
    rite: inputs("inputForbiddenrite", "checked"),
  }

  // calculations
  const skelDamage = stats.skeleton * stats.heart;
  const forbDamage = stats.rite ? (stats.life * 0.4 + stats.energy * 0.25) * (1 - stats.chaos / 100) : 0;
  const totalDamage = stats.character ? (skelDamage + forbDamage) * 2 : skelDamage + forbDamage;

  // printing cwdt table to html, but first clear the area
  while (output.firstChild) output.removeChild(output.firstChild);

  // Warns if you're taking chaos damage
  if (forbDamage - stats.ward > 0) {
    debug.textContent = `${Math.round(
      forbDamage - stats.ward
    )} dmg taken to life`;
  } else {
    // had to include else statement to clear debug if no damage will be taken
    debug.textContent = ``;
  }

  // Lets generate that table with some nice colors
  for (let i = 0; i < cwdt.length; i++) {
    // Generate values for calc
    const innLevel = i + 1;
    const innValue = cwdt[i];
    const innDivergent = Math.floor(cwdt[i] - (cwdt[i] * 20) / 100);
    const innCustom = Math.floor(cwdt[i] - (cwdt[i] * stats.diver) / 100);
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
    output.prepend(fragment);
  }
}