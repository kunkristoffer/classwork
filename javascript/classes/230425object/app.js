const input = document.getElementById("input");
const output = document.getElementById("output");

// Objects
const person = {
    firstName: "Yngve",
    lastName: "Olsen",
    age: 31,
    postCode: 4014,
    hobbies: ["coding", "movies", "jogging"]
};

// oppdatere object?  du kan ref object og value
person.firstName = "Bengt"
person.age++;

// ligge til ny info?
person.city = "Stavanger"

/* output.insertAdjacentHTML('beforeend', person.firstName) */

const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
  {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
    },
  {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
    },
  {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
    }
];

// list alle navnene fra objectet people
for (i = 0 ; i < people.length ; i++) {
   /*  output.insertAdjacentHTML('beforeend', `${people[i].name}</br>`) */
}

// Funksjon som tar imot people array, funksjonen skal generere en setning for hver person som oppsummerer personen
// X is a (age) year old (man/woman) who likes (hobies) among other things
/* function personSummarizer(arr) {
    // ingen datavalidering denne gangen, vi er litt lat :')
    for (let person of arr) {
        // var "person" er scopet inni denne funksjonen og vill ikke bruke "Bengt" som vi lå til tidligere
        const randomHobby = person.hobbies[Math.floor(Math.random() * person.hobbies.length)]
        const pronoun = person.male ? "man" : "woman"
        const name = person.name
        const age = person.age
            
        output.insertAdjacentHTML('beforeend', `
            ${person.name} is a 
            ${person.age} year old
            ${person.male ? "man" : "woman"} who likes
            ${person.hobbies[Math.floor(Math.random() * person.hobbies.length)]}
            among other things</br>
        `)
    }
}; */

function personSummarizer(arr) {
	const summaries = [];
	for (let person of arr) {
    person.hobbies.push("coding");
    person.age++
		const randomHobby =
			person.hobbies[Math.floor(Math.random() * person.hobbies.length)];
		const pronoun = person.male ? "man" : "woman";
		const name = person.name;
		const age = person.age;

		const summary = `${name} is a ${age} year old ${pronoun} who likes ${randomHobby} among other things.</br>`;

		summaries.push(summary);
	}
	return summaries;
}


output.insertAdjacentHTML('beforeend', personSummarizer(people));