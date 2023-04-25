// 99% av tilfeller så bruker man === når du skal sammenligne
console.log("3" == 3); //true
console.log("3" === 3); //false

// Ternary er forkortet if/else, den er en påstand som returner en verdi
// Ternary sin plass er en kjapp ifelse
let canOrder = userAge >= 18 ? "øl" : "saft"
const userAge = 18;

//normalt vil en ifElse se slik ut
/* if (userAge >= 18) {
    canOrder = øl;
} else {
    canOrder = saft;
}
console.log(canOrder) */

//
console.log(`Gjesten skal serveres ${userAge >= 18 ? "øl" : "saft" }`)



// Switch case
spørsmål ? "alternativ 1" : spørsmål2 ?  "Alternativ 2" : "Alternativ 3" // ikke gjør dette

// bruk heller en switch case hvor du har mulig
switch (userAge) {
    case 18: 
        console.log("gjesten er 18")
        break;
    case 17:
        console.log("gjesten er 17")
        break;
    default:
        console.log("gjesten er ikke 17 eller 18")
}

// Hvis du skal kjøre operators så kan du skifte til en switch true
switch (true) {
    case userage >= 18:
        console.log("gjesten er eldre enn 18");
        break;
    default:
        console.log("default fallback")
}

// json er en måte å strukturere data på som ligner på hvordan et object ser ut i javascript
// det er små forskjeller mellom json og javascript, men det er mulig å oversette mellom språkene
const myObj = { firstName: "Ola", lastName: "Nordman", postCode: 5555 };


// Hvis du bare definerer en array så teller den som truthy
const myArray = [];
if (myArray) {
    console.log("tom array er truthy")
}