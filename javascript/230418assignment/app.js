// Task 1
// Checks wether a number is even or odd and prints out in console log
const ranNum = Math.floor(Math.random() * 100);
const isEvenNumber = (i) => `${i} is an ${i%2?"odd":"even"} number`;
console.log(isEvenNumber(ranNum));


// Task 2
// Change a input parameter to uppercase and spit out a console log
function stringUppercase (i) {
    return i.toUpperCase().concat("!")
};
console.log(stringUppercase("this is cool"));


// Task 3
// Greet the user with different msg depending on time of day
realTime = new Date().getHours();
function userGreeting (inputName,inputTime) {
    switch (true) {
        case (inputTime <= 6):   return "Good night " + inputName;
        case (inputTime <= 12):   return "Good morning "+ inputName;
        case (inputTime <= 18):   return "Good day "+ inputName;
        case (inputTime <= 24):   return "Good evening "+ inputName;
        default: return `Invalid time`
    }
}
console.log(userGreeting("Gunnar", realTime))


// Task 4
// Remove the first and last index of an array and console log remaining.
const arrayCutter = (i) => {
    i.shift()
    i.pop()
    return i
};
console.log(arrayCutter(["Red", "Green", "Blue", "Yellow"]));


// Task 5
// Replace words, remove white space and convert a string to an array and console log each step
const text = "  Javascript is hard   ";
// Methods seperated
console.log(text.replace("hard", "fun"));
console.log(text.trim());
console.log(text.split(" "));
// Methods combined
console.log(text.replace("hard", "fun").trim().split(" "));


// Task 6
// Add new hero to end, remove first hero, replace dr strange /w thanos and splice to remove thor+hulk and add cpt america
const marvelHeroes = ["Spider-Man","Thor","Hulk","Doctor Strange","Iron Man"];
function thanosSnap () {
    marvelHeroes.push("Howard the Duck")
    marvelHeroes.shift()
    marvelHeroes[marvelHeroes.indexOf("Doctor Strange")] = "Thanos"
    marvelHeroes.splice(0,2,"Captain America ")
    return marvelHeroes
};
console.log(thanosSnap());


// Task 7
// compares and prints msg depending on input type
const coolMaker = (i) => {
    switch (typeof i) {
        case 'string': return `😎${(i)}😎`;
        case 'number': return `😎${(i*2).toString()}😎`;
        case 'boolean': return i ? "😎Yeah😎" : "😎Chill😎";
        default: return "😎Primitive values only😎";
    }
};
console.log(coolMaker("test"));     //string
console.log(coolMaker(9));          //num * 2
console.log(coolMaker(true));       //boolean true
console.log(coolMaker(false));      //boolean false
console.log(coolMaker([0,7]));      //array


// Task 8
// Function takes inn an array and a string;
// if duplicates, removes from array, else adds to end of array
// Prints result in console log.
// console.log(yourFunction(["Red", "Green"], "Blue")) --> ["Red", "Green", "Blue"]
// console.log(yourFunction(["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
const updateArray = (a,s) => {
    s = s.split(" "); 
    //  hadde funket hvis du ville beholde en av duplicates
    // return [...new Set([...a, ...s])]
    return a.concat(s).filter(
            (item, pos, a) => a.lastIndexOf(item) === a.indexOf(item)
        );
};
console.log(updateArray(["Red", "Green", "Orange"], "Blue Orange Red Yellow"))