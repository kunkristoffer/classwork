const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];
const peopleAge = [];
let people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];

// brukes for å validere bonus oppgave i task 1
// Atle Johnny er nå en del av folket
let atleJohnny = Object.assign(people, [{
	name: "Atle",
	male: true,
	age: 36,
	hobbies: ["cycling", "football", "pool"],
}]);



/* Task 1: 
 * loop over people with FOR:
 * If name = "otto", skip
 * add random city from cities to person in people
 * set title for person in people
 * increment age by 2
 * bonus: calculate combined age */

for (let person of people) {
	if (person.name === "Otto") continue;
	person.city = cities[Math.floor(Math.random() * cities.length)];
	person.title = person.male ? "Mr." : "Ms.";
	person.age+=2 
	person.hobbies.unshift("coding")
	// adds the persons age to global scope peopleAge
	peopleAge.push(person.age)
}

// calculate the combined age of all persons in people and validates people object
console.log(peopleAge.reduce((getMax, arr) => getMax + arr, 0))
console.log(people)



/* Task 2: 
 * create a dice function that takes arguments
 * argument #1 should be # of attempts
 * bonus:
 * argument #2 should be # of dice faces
 * return result in an array */

function diceRoller(attempts,faces) {
	let result = [];
	for (let i = 0 ; i < attempts ; i++) {
		// (faces || 6) er fallback i tilfelle function kun får et argument
		result.push(Math.floor(Math.random() * (faces || 6) + 1));
	}
	return result
}

console.log(diceRoller(4))
console.log(diceRoller(6))
console.log(diceRoller(5, 20));



/* Task 3: 
 * Create a FOR OF loop that does the following
 * Removes whitespace from the beginning and end of each word
 * Removes whitespace from the beginning and end of each word
 * After the loop, use a method to join the array with a 
 * single space between the words (" "), 
 * then console.log the final string.asdasdasdasd
 * bonus:  */

// init cleaned var to avoid looping
let cleaned = [];
const words = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];

for (let word of words) {
	cleaned.push(word.trim().toLowerCase())
}

console.log(cleaned.join(" "))



/* Task 4: 
 * Write code that checks all the words in the string if they match the word for 'hello' in any of these languages:
 * If any of the words in the string matches any of these, the function should return: "HELLO detected in (name of the language)."
 * If none of the words in the string match any of the words for hello in the different languages, your function should return: "No HELLO detected."
 * Make sure the function is case insensitive, both 'Hello' and 'hello' should be detected. */

const test1 = "It's always polite to say hello";
const test2 = "Ciao signore!";
const test3 = "Puedes decir hola";
const test4 = "Powiedz mi czesc";
const test5 = "Sag HALLO zur mir";
const test6 = "Salut mon ami";

// Easy but boring method
helloChecker = (input) => {
	langCheck = input.toLowerCase().split(" ");
	switch (true) {
		case langCheck.includes("hello"):
			return "HELLO detected in English";
		case langCheck.includes("ciao"):
			return "HELLO detected in Italian";
		case langCheck.includes("salut"):
			return "HELLO detected in French";
		case langCheck.includes("hallo"):
			return "HELLO detected in German";
		case langCheck.includes("hola"):
			return "HELLO detected in Spanish";
		case langCheck.includes("czesc"):
			return "HELLO detected in Polish";
		default: return "No HELLO detected."
	}
}

console.log(helloChecker(test1));
console.log(helloChecker(test2));
console.log(helloChecker(test3));
console.log(helloChecker(test4));
console.log(helloChecker(test5));
console.log(helloChecker(test6));
console.log(helloChecker("test6"));



/* Task 5: 
 * Return the string received in the first parameter with the following alterations:
 * any letter in the string matching charA (the second parameter in the function) will be replaced with
 * charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,
 * and letters matching charB will be replaced with charA. See the expected console log comments below.*/

function doubleSwap(string, charA, charB) {
	output = [];
	for (let letter of string) {
		if (letter == charA) {
			output.push(charB)
		} else if (letter == charB) {
			output.push(charA)
		} else {
			output.push(letter)
		}
	}
	return output.join("")
}

//Un-comment these console logs to test your function:
console.log(doubleSwap("this is a string", "i", "s")); 						// thsi si a itrsng
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")); 	// maybe another approach is necessary
console.log(doubleSwap("what is the point of this?", "o", "t")); 			// whao is ohe ptino tf ohis?
console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!")); 	// C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg
console.log(doubleSwap("let's do one last test", "l", "e")); 				// elt's do onl east tlst