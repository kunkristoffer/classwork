import {} from "./index.js"
import {pokedexAllNames} from "./data.js"
import {} from "./html.js"


/**
 * Function calls pokeapi and requests data:
 * @param {*} modifier parameters for data
 * @returns Json data
 * @example
 * "pokemon/ditto"
 * "pokemon-species/aegislash"
 * "pokemon?limit=20&offset=0"
 */
export async function apiRequest(param) {
 const request = await fetch("https://pokeapi.co/api/v2/"+param)
 if (request.status !==200) return
 const data = await request.json()
 return data
}

export async function pokedexGetAllNames() {
 if (Object.keys(pokedexAllNames).length === 0 && pokedexAllNames.constructor === Object) {
  const data = await apiRequest("pokemon?limit=151&offset=0")
  localStorage.setItem("pokedexNames", JSON.stringify(data.results))
 }
}

export async function pokedexGetPokemon(name) {
 if (!localStorage.getItem(`pokedexPokemon${name}`)) {
  const data = await apiRequest(`pokemon/${name.toLowerCase()}`)
  localStorage.setItem(`pokedexPokemon${name}`, JSON.stringify(data))
 } 
 return JSON.parse(localStorage.getItem(`pokedexPokemon${name}`))
}

// detail.sprites.other["official-artwork"].["front_default"]