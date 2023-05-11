// Løkker i JavaScript og ulike metoder for å iterere gjennom arrays.
// Løkker i JavaScript gir oss muligheten til å utføre gjentatte handlinger på en enkel og effektiv måte. 
// I dag gikk vi gjennom noen ulike typer for-løkker (for, for-of, og for-in) og metoder for å iterere gjennom arrays, 
// som forEach og map, sammen med brukstilfeller og kodeeksempler.

// 
// En klassisk for-løkke består av tre deler: initialisering, betingelse og inkrementering. 
// Den lar oss utføre en handling et bestemt antall ganger, så lenge betingelsen er sann.
for (let i = 0; i < 10; i++) {
console.log(i);
}

// For-of-løkker
// for-of-løkker introdusert i ES6, gjør det enkelt å iterere gjennom iterable objekter, som arrays, strenger og sett.
const arr = [1, 2, 3];
for (const element of arr) {
console.log(element);
}

// For-in-løkker
// for-in-løkker brukes vanligvis til å iterere gjennom egenskapene til et objekt. 
// Denne løkketypen er nyttig når vi ikke kjenner objektets nøkler på forhånd, men 
// ikke så nyttig med arrays siden den bare gir oss nøkkelen (som er indexen i et array).
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
console.log(key);
}

// Array-metoder for iterasjon
// forEach er en metode på Array-objektet som lar oss utføre en funksjon for hvert element i arrayet. 
// Den tar en callback-funksjon som argument og utfører denne funksjonen for hvert element.
array.forEach(callbackFunction(value, index, arrayRef) {
    // kode
})

// Index og arrayRef er valgfri, men det første parameteret (value) er nødvendig, for eksempel:
const numbers = [1, 2, 3];
numbers.forEach(function(number) {
    console.log(number * 2);
});

// Koden over gjør det samme som denne for-of-loopen:
for (const number of numbers) {
console.log(number * 2);
}

// Eller forEach loop med pilfunksjon, og index:
numbers.forEach((number, index) {
console.log(number + " at " + index);
});

// map-metoden er også en metode på Array-objektet og lar oss lage et nytt array ved å transformere hvert
// element i det opprinnelige arrayet. 
// Den tar en callback-funksjon som argument og returnerer et nytt array med de transformerte elementene.
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => {
return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6]
