import {} from "./index.js"
import {pokedexAllNames,pokedexAllNamesArr} from "./data.js"
import {pokedexGetPokemon} from "./fetch.js"

// Define inputs/outputs
const pokeSearch = document.getElementById("poke-search")
const pokeCardOutput = document.getElementById("poke-card-output") 


/**Shortcut function for creating elements
 * @param {*} type type of element
 * @param {*} content content of element
 * @param {*} elemName class name
 * @param {*} elemId id name
 * @returns returns element
 * @example
 * cElem("p","pokemon","color-blue","poke-card-title")*/
function cElem(type,content,elemName,elemId) {
 const element = document.createElement(type)
 if (elemName) {
  element.classList.add(elemName)
 }
 if (elemId) {
  element.id = elemId
 }
 // change content use depending on type
switch (type) {
 case "img": element.src = content; break;
 case "h2": element.textContent = content; break;
 case "p": element.textContent = content; break;
 default: break;
}
 return element
}

export async function displayPokeNameAll() {
 const container = cElem("div","","poke-font","poke-all")
 for (const pokemon of pokedexAllNames) {
  const name = cElem("p",pokemon.name)
  container.append(name)
 }
 pokeCardOutput.append(container)
}

export async function displayPokeCard() {
 const container = cElem("div","","poke-card")
 const title = cElem("h2","Pokecard","poke-font")
 const img = cElem("img","")

 container.append(title, img)
 pokeCardOutput.append(container)
}










/* function createEl(type="div",param) {
 const element = Object.assign(document.createElement(type), param);
 return element
} */
// const picture = createEl("img",{className:"pic-class",id:"pic-id",src:"pic.png"});