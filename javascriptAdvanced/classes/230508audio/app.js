// forteller nettleser å bruke strengere kontroll av koden
"use strict"

// output field
const output = document.querySelector("#output")
output.textContent = "test"


// undervisning
let person1 = {
    name: "Per",
    age: 22
}

let person2 = {
    name: "Alice",
    age: 33
}

// Factory pattern:
function createPerson(name,age) {
    return {
        name: name,
        age: age,
        // du kan også bruke methods eller functions her
        /* speak() {
            console.log(`Hi my name is ${name}, i am ${age} years old.`)
        } */
    }
}

/* console.log(createPerson("per", 22)) */
let per = createPerson("Per",22)
/* console.log(per) */

// Object oriented (klasse templates)
class person {
    // constructor kjøres bare når vi kjører new
    constructor(name, age){
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`)
    }
};

// NEW bruker person CLASSen til å lage en object
let per2 = new person("Per", 22)
let alice2 = new person("Alice", 33)

console.log(per2)
per2.speak()
/* per.speak()
alice2.speak */

// why use classes? inheritance 
// factory patterns can't inherit 
// når vi bruker extends må vi definere ka vi bruker fra parent
class employee extends person {
    constructor (name, age, title) {
        // henter gammel informasjon
        super(name, age)
        // ny informasjon
        this.title = title
    } 

    work () {
        console.log("working...")
    }
}

let employee1 = new employee("Trond", 44, "Web dev")
employee1.speak()
employee1.work()


// Audio
/* const audioE1 = document.createElement("audio")
audioE1.scr = "sounds/sound.wav"
audioE1.constrols = true
 */

const audioE1 = new Audio("sounds/test.wav")
audioE1.controls = true


output.append(audioE1)