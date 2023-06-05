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

