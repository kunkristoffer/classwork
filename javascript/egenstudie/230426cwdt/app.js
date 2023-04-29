// defining input and output areas
const input = document.querySelector("fieldset");
const output = document.getElementById("output");

// adds eventlistener that checks for user inputs
input.addEventListener("input", updateValue); 

// initialization //
const inputLife = document.getElementById("inputLife").value;
const inputEnergy = document.getElementById("inputEnergy").value;
const inputWard = document.getElementById("inputWard").value;
const inputChaos = document.getElementById("inputChaos").value;
const inputHeartbound = document.getElementById("inputHeartbound").checked;
const inputSkeleton = document.getElementById("inputSkeleton").checked;
const inputForbiddenrite = document.getElementById("inputForbiddenrite").checked;

// calculations
const heartboundDamage = inputHeartbound ? 840 : 420 ;
const skeletonDamage = inputSkeleton ? heartboundDamage * 4 : heartboundDamage * 3;
const forbiddenriteDamage = inputForbiddenrite ? ((inputLife * 0.4) + (inputEnergy * 0.25)) * (1-(inputChaos/100)) : 0;
const totalDamage = skeletonDamage + forbiddenriteDamage;

function updateValue() {
  // initialization //
  const inputLife = document.getElementById("inputLife").value;
  const inputEnergy = document.getElementById("inputEnergy").value;
  const inputWard = document.getElementById("inputWard").value;
  const inputChaos = document.getElementById("inputChaos").value;
  const inputHeartbound = document.getElementById("inputHeartbound").checked;
  const inputSkeleton = document.getElementById("inputSkeleton").checked;
  const inputForbiddenrite = document.getElementById("inputForbiddenrite").checked;

  // calculations
  const heartboundDamage = inputHeartbound ? 840 : 420 ;
  const skeletonDamage = inputSkeleton ? heartboundDamage * 4 : heartboundDamage * 3;
  const forbiddenriteDamage = inputForbiddenrite ? ((inputLife * 0.4) + (inputEnergy * 0.25)) * (1-(inputChaos/100)) : 0;
  const totalDamage = skeletonDamage + forbiddenriteDamage;
  
  if (forbiddenriteDamage - inputWard > 0) {
    output.innerHTML = `${Math.round(forbiddenriteDamage - inputWard)} unmit`
  } else {
    output.innerHTML = `${Math.round(totalDamage)} cwdt`
  }
};