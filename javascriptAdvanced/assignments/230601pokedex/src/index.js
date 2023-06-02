import {pokedexAllNames,pokedexAllNamesArr} from "./data.js"
import {pokedexGetAllNames,pokedexGetPokemon} from "./fetch.js"
import {displayPokeCard,displayPokeNameAll} from "./html.js"
import {} from "./modal.js"

const showDialog = document.getElementById("poke-details-show")
const pokeDialog = document.getElementById("poke-details")

showDialog.addEventListener("click", () => {
 // pokedexGetAllNames()
 // pokeDialog.showModal();
 // 
 pokedexGetPokemon("Charizard")
})

pokeDialog.addEventListener("click", () => {
 if (event.target === pokeDialog) {
  pokeDialog.close();
 }
});

displayPokeNameAll()
// displayPokeCard();
