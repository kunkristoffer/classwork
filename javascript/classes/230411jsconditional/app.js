// variabler
const x = 0
let y = 0
y = 2
// strings
const myText = "Dette er tekst."
// numbers / integers / ints
const myNumber = 312.321
// booleans
const myBool = true
// array
const myArray = [312, 43, 543, 1234]
// object
const myObj = { firstName: "Endre", lastName: "Jordal", postCode: 4013}


// conditionals: "if" or "else" or "else if"
// "hvis ..... det så ......."
// kode som kjøres hvis en kriterie oppfylles, hoved delen av logikk i programmering
const myVariable = 5;
const myVar2 = 3;
const userAge = 18;
const userInvited = true;

if (userAge === 18) {
    console.log("kan kjøpe øl");
} else if (userAge <= 15){
    console.log("kan bestille saft.")
} else {
    console.log("får bare saft.")
};

// comparison operator sjekker om noe er likt med variabelen
// kun 1 "=" brukes kun til å definere en variable
// 2 "=="  sjekker om to verdier er lik
// 3 "===" Sjekker at datatypen også er lik, f.eks string vs integer
// det som er inni comparison er enten TRUE eller FALSE
// du kan også bruke >, <, >=, etc
// "else if" mæ være før else, "else" må være på slutten

// "Logical and" opperator "&&"
if (userAge >= 18 && userInvited === true) {
	console.log("kan bestille øl");
};

// hvis du skal sjekke om noe er sant trenger du ikke å bruke "=== true" eller "=== false" så kan man istedet bare
// skrive variabelen
if (userAge >= 18 && userInvited) {
	console.log(" ");
}
// string som har innhold er "truthy" mens en tom string eller 0 er "falsey"

// "!==" er det motsatte, alt annet enn det som er "true" teller
if (userAge !== 18 && userInvited) {
	console.log(" ");
}

// asserter du en variable med ! forran så teller det som "not"
if (userAge !== 18 && !userInvited) {
	console.log("sjekk ! forran userInvited");
}

// med pipes "||" teller som en logical "OR" statement, de kan også brukes flere ganger i et if statement
if (userAge === 18 || myVar2 <= 3) {
	console.log(" ");
}

// med pipes "||" teller som en logical "OR" statement, de kan også brukes flere ganger i et if statement
if ((userAge === 18 || myVar2 <= 3) && userInvited) {
	console.log(" ");
}