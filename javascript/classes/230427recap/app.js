// loops
const fruits = [
	"Lemon",
	"Mangos",
	"Apple",
	"Pear",
	"Grapes",
	"Kiwi",
	"Fig",
	"Peach",
	"Grapefruit",
	"Watermelon",
	"Orange",
	"Banana"
];

for (let i = 0; i < 10; i++) {
	/* console.log(i); */
}

for (let fruit of fruits) {
	/* console.log(fruit); */
}

const x = 5;
let y = 0;

while (x !== y) {
	y++;
	/* console.log(y); */
}


// objects
const person = {
    firstName: "bengt",
    lastName: "leiknes",
    age: 43
};

person.nyTing = "ny ting"
/* console.log(person) */

// Funksjon som genererer et array med random tall.
// 2 parametre: 1. Hvor mange tall? 2. Hvor store tall?

const makeNumberArray = (size, maxNum) => {
	const numArray = [];
	for (let i = 0; i < size; i++) {
		numArray.push(Math.floor(Math.random() * maxNum) + 1);
	}
	return numArray;
};
const myRandomNumbers = makeNumberArray(50, 1000);
/* console.log(myRandomNumbers); */


// funksjon som finner høyeste tallet i en number array
const maxFinder = (arr) => {
    let biggest = 0;
    for (let value of arr) {
        if (value > biggest) biggest = value
    }
    return `The biggest number in the array is ${biggest}`
}

/* console.log(maxFinder(myRandomNumbers)) */


// Funksjon som lager en random passord
// 1. lengden på passordet

function generatePassword(size) {
    let password = [];
    let possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    for (let char of Array(size).fill().keys()) {
        const randomNum = Math.floor(Math.random() * possibleChars);
        password += possibleChars.split("")[randomNum]
    }
    const randomChar = Math.floor(Math.random() * password.length);
    password[randomChar] = password[randomChar].toUpperCase();
    return password[]
}

console.log(generatePassword())





// notes
// 1. hvordan ref data i vanlig for loop
// 2. hvordan ligge til en ny object til eksisterende object

// for (let char of myText.split(""))