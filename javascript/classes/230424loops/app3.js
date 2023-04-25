// Oppgave!
// Funksjon som tar i mot et string array og returner
// arrayet med alle strings reversert.
// må kun godta arrays med lengde på 10-100

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

// sjekker om (arr) er kortere enn 10 eller lengre enn 100, if true, feilmelding
const stringArrayReverser = (arr) => {
    if (arr.length < 10 || arr.length > 100) return "Array too short, or too long";
    const reversedArray = [];
    for (let i = 0 ; i < arr.length ; i++) {
        // gjør string, om til array, reverserer order, sitter sammen igjen
        const reversedFruit = arr[i].split("").reverse().join("")
        // dytter reversedFruit inn i reversedArray
        reversedArray.push(reversedFruit)
    }
    return reversedArray
};

const reversedFruit = stringArrayReverser(fruits);
console.log(reversedFruit);