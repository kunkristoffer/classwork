import {} from "./index.js"
import {pokedexGetAllNames} from "./fetch.js"
import {} from "./html.js"

export let pokedexAllNames = JSON.parse(localStorage.getItem("pokedexNames")) || {} ;
export let pokedexAllNamesArr = JSON.parse(localStorage.getItem("pokedexNamesArr")) || [] ;

if (localStorage.getItem("pokedexNamesArr") === null && localStorage.getItem("pokedexNames") !== null ) {
 for (const pokemon of pokedexAllNames) {
  pokedexAllNamesArr.push(pokemon.name)
 }
 localStorage.setItem("pokedexNamesArr", JSON.stringify(pokedexAllNamesArr))
}