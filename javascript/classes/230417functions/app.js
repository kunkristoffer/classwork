// Functions (Funksjoner) - en kodeblokk som du kan kalle på senere
// Når du lager websider er knapper som regel knyttet til funksjoner
// keywords: if, else, elseif, function

function myFunction() {
    console.log("metode #1 for å lage en funksjon")
};

// Arrow function er nyere og har mulighet for flere paramenters
const myFunctionTwo = () => {
    console.log("metode #2 for å lage en funksjon")
}

// Return statement - kan returne en variabel
function myReturn () {
    const greeting = "God Morgen"
    return greeting;
}

// Du kan enten definere returnen via en const/let eller hente funksjonen direkte til en call
const myGreeting = myReturn();
console.log(myReturn());

// Scope - det som er inni en variable er lokalt, du kan ikke få tilgang til dataen utenfor funksjonen, men du kan hente data fra utenfor.
let views = 1; // global variabel
const myScope = () => {
    const myVariable = "Innhold"; // lokal variabel, kan ikke bli hentet utenifra
    views++;
    return myVariable; //kan kun ha 1 return statement i en funksjon
}

// myVariable kan ikke printe det som ligger inni en funksjon, Men hvis du returner en variabel ut fra funksjonen kan du bruke den.
/* console.log(myVariable) */


// Parameter / arguments - paramFunction (inni her kan du skrive parameters)
// Argument er det du sender til en funksjon, parameter er det du mottar
function paramFunction (userName) {
    return `Good morning ${userName}`
}

 //userName blir definert av parameter i funksjonen
console.log(paramFunction("Bengt"));


// Implied return statement
// const adder = (num1, num2) => num1 + num2    er det samme som:
// const adder = (num1, num2) => return num1 + num2
const adder = (num1, num2) => {
    return num1 + num2;
}
console.log(adder(2,3));

// rekefølgen på parameters er viktig.
const result = adder(2,3);
console.log(result);


// La oss lage en calculator
const calculator = (num1, num2, operator) => {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return `${operator} is not a valid operator`
    }
}
console.log(calculator(4,5,"-"))

// Vi kan prøve oss med switch statement
// Du trenger ikke å bruke Break; når du har return statement
function calculator2 (num1, num2, operator) {
    switch (operator) {
        case "+":   return num1 + num2;
        case "-":   return num1 - num2;
        case "*":   return num1 * num2;
        case "/":   return num1 / num2;
        default: return `${operator} is not a valid operator`
    }
}
console.log(calculator2(3,7,"*"))

// En funksjon som tar imot et tall og hvis det tallet er delelig på 5 så returnerern den en tommel opp, eller hvis ikke, en tommel ned
// da kan vi bruker operatoren "modulus" som bruker "%" tegnet
const fiveChecker = (num) => {
    /* dette er en uoptimalisert funksjon. */
    if (num % 5 === 0) {
        return "tellet er delelig på 5"
    } else if (num % 5 === !0) {
        return "tellet er ikke delelig på 5"
    }
}

// Optimalisert for en linje
const divisionChecker1 = (num1, num2) => num1 % num2 === 0 ? `${num1} er delelig på ${num2}!` : `${num1} er ikke delelig på ${num2}!`
// Enda mer ptimalisert for en linje
const divisionChecker2 = (num1, num2) => `${num1} er ${num1%num2?"ikke ":""}delelig på ${num2}!!`

console.log(divisionChecker1(3,5))
console.log(divisionChecker2(5,5))