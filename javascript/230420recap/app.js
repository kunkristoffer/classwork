// Functions
function normalFunction () {
    console.log("Funksjonen har kjørt.")
}
const arrowFunction = () => {
    console.log("Arrow funksjon har kjørt.")
}

normalFunction();
arrowFunction();

// Methods - du kan lage dine egene, men det finnes mange allerede lagt til å js
const myText = "Dette er tekst"
console.log(myText.toUpperCase())

const fruits = ["Apple", "Banana", "Peach", "Melon", "Cherry"];
const fruitHandler = (array) => {
	return array.sort();
};
const appleChecker1 = (array) => {
	if (array.includes("apple")) {
		return "The array includes apple! YAY!";
	} else {
		return "No apples 🫤";
	}
};
const appleChecker2 = (array) => {
	return `The array does ${array.includes("Apple") ? "" : "n't"} include apples`;
};
console.log(fruitHandler(fruits));
console.log(appleChecker2(fruits));

// Chaining
// Endre --> E*N*D*R*E
function starText(str) {
	return str.toUpperCase().split("").join("*");
}
console.log(starText("Kodehode"));

// Number methods
const x = 4312.4312423145354
console.log(x.toFixed(2)) // .toFixed begrenser antall decimaler
console.log(x.toPrecision(5)) // begrenser hvor mange siffer et tall kan ha.


// math er et object, ikke en method
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.round(x))






// arrow function har implied result
/* const returnRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}; */
// Implied result arrow function
const returnRandom = (array) => array[Math.floor(Math.random() * array.length)];
console.log(returnRandom(fruits))

// gjør number til string med .toString
const y = 55661177
const z = y.toString()
console.log(y.toString());

// 4 måter å gjøre string til num
console.log(+z)
console.log(Number(z))
console.log(parseInt(z))