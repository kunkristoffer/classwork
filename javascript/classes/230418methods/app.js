/* https://www.w3schools.com/js/js_string_methods.asp */
// f.eks string.method som gjør noe med variabelen er en method
// f.eks string.length som bare viser informasjon er 

const myString = "dette er en string med lower case";
const myStringUpperCase = myString.toUpperCase();

// Det finnes veldig mange måter å påvirke en string med methods
console.log(myString.length); // forteller hvor mange characters en string er
console.log(myString.toUpperCase()); // Skifter all text til uppercase
console.log(myString.toLowerCase()); // Skifter all text til lowercase
console.log(myString.slice(-5,-2));
console.log(myString.substring(0,7));
console.log(myString.substr(2,5));
console.log(myString.replace("dette", "x")); // Skifter ut dette med x, casesensetive
console.log(myString.concat(", ", myString)); // Slår sammen texten med oppgitt symbol
console.log(myString.trim()); //Fjerner hvite space på start og slutt
console.log(myString.at(1)); // Henter character på pos 1
console.log(myString[4]); // Henter character på pos 4
console.log(myString.split(" ")) // converterer stringen til en array, parameter som split

// Arrays har endå flere måter å påvirke dem med methods!
const fruits = [
    "Apple", 
    "Banana",
    "Pear",
    "Pineapple",
    "Grapes",
    "Cherry",
    "Melon",
    "Mango",
];

console.log(fruits.join(", ")) // sitte sammen et array til en string.

// Følgende methods endrer på orginale array innholdet
fruits.push("Lemon"); // Ligger til data på slutten av array
console.log(fruits); // f.eks Fruits inneholder nå lemon
console.log(fruits.pop()); // Fjerner siste elementet i en array, returner det som ble fjernet
console.log(fruits.shift()) // Fjerner første elementet i en array, returner det som ble fjernet
console.log(fruits.unshift("Lemon")) // Ligger til data på starten av array

// Bracket notation
// fruits.indexOf("Pineapple") 
// fruits[3] = "Peach"
fruits[fruits.indexOf("Pineapple")] = "Watermelon"
console.log(fruits)

// .splice returnerer fjernede elementer
// .splice(x,y,z,z) fjerner Y antal fra pos X og ligger til Z's
// .splice kan også brukes til å fjerne items fra en array
fruitsSplice = fruits.splice(2,4,"Lemon","Peach")  
console.log(`dette er en splice: ${fruitsSplice}`);