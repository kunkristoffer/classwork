// Array med mange navn
const names = [ "Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick" ];
console.log(`Heisann ${names[0]}`)

// best practice - "i" for iterrator
// let "i = 0" hvor begynner loopen, "i < 10" hvor mange ganger skal den kjøre, "i++" hvor mange ganger incrementer per loop
// (let "start" ; "bound" ; "increment")

// FOR loop
for (let i = 0 ; i < names.length ; i++) {
    console.log(`Hei ${names[i]}`)
}

// FOR OF loop
// spesefict designet for å loope over en array
// default behavior er å bruke (let i = 0 ; i < names.length ; i++)
for (let name of names) {
    console.log(name)
}

// WHILE loop
// når du ikke vet hvor mange ganger den må kjøre
// kjører helt fram til den returnerer TRUE

const randomNumber = Math.floor(Math.random() * 10 + 1)
let guess = 0

while (randomNumber !== guess) {
    console.log(`${guess} attempt at guessing ${randomNumber}...`);
    guess++;
}

// Break / Continue
for (let i = 0 ; i < 10 ; i++) {
    // stopper på 7
    if (i === 7) break; 
    console.log(`Number was: ${i}`);
}

for (let i = 0 ; i < 10 ; i++) {
    // hopper over 7
    if (i === 7) continue;
    console.log(`Number was not: ${i}`);
}

// Evig loop, men du bruker hopper ut
while (true) {
    
}


// DRY - Don't repeat yourself
// hvis du har en verdi som ofte gjentar seg, sitt heller en masterverdi

// FOR IN er det samme som FOR OF, men for objects