// DOM Manipulation - Document object model
// console.log(document); viser hvor mye informasjon en webside inneholder

const grandParent = document.getElementById("grandparent")
/* grandParent.style.backgroundColor = "#fff" */

function yellowMaker(elem) {
    elem.style.backgroundColor = "yellow"
};
// yellowMaker(grandParent)

const parent = document.getElementsByClassName("parent")

// ClassName returnerer en array, så du må eventuelt ref hvilken eller kjøre en loop
console.log(parent)
yellowMaker(parent[0])

for (let i = 0 ; i < parent.length; i++) {
    yellowMaker(parent[i])
}

// querySelector finner bare første, querySelector returnerer alle
const child = document.querySelector(".child")

child.style.backgroundColor = "#fff"


// Create new content
const newChild = document.createElement("h3")
newChild.textContent = "hei";

newChild.classList.add("child")
newChild.classList.remove("test")

grandParent.appendChild(newChild)
grandParent.prepend(newChild)


// create new array
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

// constructs the UL element that will contain the array as LI items
const myFruitList = document.createElement("ul");

// loops over the fruit array
for (let fruit of fruits) {
	const fruitItem = document.createElement("li");
	fruitItem.textContent = fruit;
	myFruitList.appendChild(fruitItem);
}

grandParent.appendChild(myFruitList);

//
const inputNum = document.querySelector("#inputnum");
const circleContainer = document.querySelector("#circlecontainer");

const makeCircles = () => {
	circleContainer.replaceChildren();

	if (inputNum.value < 1000 && inputNum.value > 0) {
		//lag sirkler her
		for (let i = 0; i < inputNum.value; i++) {
			const circle = document.createElement("div");
			circle.classList.add("circle");
			circle.style.backgroundColor = `#${Math.floor(
				Math.random() * 0xffffff
			).toString(16)}`;
			circle.textContent = i + 1;
			circleContainer.appendChild(circle);
		}
	} else {
		window.alert("Please input a number between 1 and 1000");
	}
};