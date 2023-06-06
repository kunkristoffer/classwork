import {pokedexAllNames,pokedexAllNamesArr} from "./data.js"
import {pokedexGetAllNames,pokedexGetPokemon} from "./fetch.js"
import {displayPokeCard,displayPokeNameAll} from "./html.js"
import {} from "./modal.js"

const showDialog = document.getElementById("poke-details-show")
const pokeDialog = document.getElementById("poke-details")

// Gets name of all pokemons
pokedexGetAllNames()

// displays pokemon information
displayPokeNameAll()
displayPokeCard("bulbasaur");

// Opening and closing the pokedex
const pokedexDisplay = document.getElementById("pokedex-container")
const pokedexDisplayLeft = document.getElementById("pokedex-left")
const pokedexDisplayRight = document.getElementById("pokedex-right")
const pokedexDisplayClosed = document.getElementById("pokedex-left-closed")

// open
pokedexDisplayClosed.addEventListener("click", () => {
 pokedexDisplayLeft.style.display = "flex"
 pokedexDisplayRight.style.display = "flex"
 pokedexDisplayClosed.style.display = "none"
})

// close
document.addEventListener("click", (event) => {
 if (event.target.tagName === "BODY") {
  pokedexDisplayLeft.style.display = "none"
  pokedexDisplayRight.style.display = "none"
  pokedexDisplayClosed.style.display = "flex"
 }
})

// closes

// Modal interface
/* showDialog.addEventListener("click", () => {
 // pokedexGetAllNames()
 // pokeDialog.showModal();
 // 
 pokedexGetPokemon("Charizard")
}) */
/* pokeDialog.addEventListener("click", () => {
 if (event.target === pokeDialog) {
  pokeDialog.close();
 }
}); */