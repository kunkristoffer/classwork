/* looks for updates to the input fields */
const input = document.querySelector("fieldset");
const log = document.getElementById("cwdtcalc");
input.addEventListener("input", updateValue);
window.onload = updateValue;

/* initialization */
let heartboundDamage;
let skeletonDamage;
let forbiddenriteDamage;
let inputLife = document.getElementById("inputLife").value;
let inputEnergy = document.getElementById("inputEnergy").value;
let inputWard = document.getElementById("inputWard").value;
let inputChaos = document.getElementById("inputChaos").value;
let inputHeartbound = document.getElementById("inputHeartbound").checked;
let inputSkeleton = document.getElementById("inputSkeleton").checked;
let inputForbiddenrite = document.getElementById("inputForbiddenrite").checked;

/* cwdt damage table */
const cwdtLevel = [23,22,21,20,19,18,17,16,15,14,13,12,11,10]
const cwdtTable = [4350,3950,3580,3272,3142,2874,2621,2394,2184,1980,1804,1635,1485,1354]


/* Update values on input change */
function updateValue(e) {
  /* Fetch values from inputfields */
  inputLife = document.getElementById("inputLife").value;
  inputEnergy = document.getElementById("inputEnergy").value;
  inputWard = document.getElementById("inputWard").value;
  inputChaos = document.getElementById("inputChaos").value;
  inputHeartbound = document.getElementById("inputHeartbound").checked;
  inputSkeleton = document.getElementById("inputSkeleton").checked;
  inputForbiddenrite = document.getElementById("inputForbiddenrite").checked;

  /* divergentCheckbox = document.getElementById("divergentCheckbox").value;
  divergentQuality = document.getElementById("divergentQuality").value;
  
  if (divergentCheckbox) {
    document.getElementById("divergentQuality");
    style.color = 'red';
  } */

  /* calculate heartbound damage from input fields */
  heartboundDamage = inputHeartbound ? 840 : 420 ;

  /* calculate skeleton damage from input fields */
  skeletonDamage = inputSkeleton ? heartboundDamage * 4 : heartboundDamage * 3;

  /* calculate Forbidden rite damage from input fields */
  forbiddenriteDamage = inputForbiddenrite ? ((inputLife * 0.4) + (inputEnergy * 0.25)) * (1-(inputChaos/100)) : 0;

  /* calculate total damage from input fields */
  totalDamage = skeletonDamage + forbiddenriteDamage;

  /* tests output */
  if (forbiddenriteDamage - inputWard > 0) {
    log.innerHTML = `${Math.round(totalDamage)} cwdt </br> ${Math.round(forbiddenriteDamage - inputWard)} unmit`
  } else {
    log.innerHTML = `${Math.round(totalDamage)} cwdt`
  }
}

/* Now comes the fun parent, lets start calculating! */
function cwdtCalculate() {
  document.getElementById("cwdtcalc").textContent = totalDamage
  console.log(totalDamage)
}






















/* Damage value numbers for each gem starting at level 23 */
const cwdt = [
  ["Level","Normal","Divergent","Divergent 23%"],
  [23,4350,3480,3350],
  [22,3950,3160,3042],
  [21,3580,2864,2757],
  [20,3272,2618,2519],
  [19,3142,2514,2419],
  [18,2874,2299,2213],
  [17,2621,2097,2018],
  [16,2394,1915,1843],
  [15,2184,1747,1682],
  [14,1980,1584,1525],
  [13,1804,1443,1389],
  [12,1635,1308,1259],
  [11,1485,1188,1143],
  [10,1354,1083,1043]
]

/* Prints the gem level and damage table into html document */
function getCells(cwdt, type) {
  return cwdt.map(cell => `<${type}>${cell}</${type}>`).join('');
}
function createBody(cwdt) {
  return cwdt.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}
function createTable(data) {
  const [headings, ...rows] = cwdt;
  return `
    <table>
      <thead>${getCells(headings, 'th')}</thead>
      <tbody>${createBody(rows)}</tbody>
    </table>
  `;
}
document.getElementById("cwdttable").innerHTML = createTable(cwdt);