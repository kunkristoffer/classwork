import {} from "./index.js"
import {pokedexAllNames,pokedexAllNamesArr} from "./data.js"
import {pokedexGetPokemon} from "./fetch.js"

// Define inputs/outputs
const pokeSearch = document.getElementById("poke-search")
const pokeOutputLeft = document.getElementById("poke-card-output-left")
const pokeOutputRight = document.getElementById("poke-card-output-right")  


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
 const container = cElem("div","","","poke-all")
 for (let i = 0; i < pokedexAllNames.length; i++) {
  const line = cElem("div")
  const number = cElem("p",i+1)
  const name = cElem("p",pokedexAllNames[i].name)
  line.addEventListener("click", () => displayPokeCard(pokedexAllNames[i].name))
  line.append(number,name)
  container.append(line)
 }
 pokeOutputRight.append(container)
}

export async function displayPokeCard(name) {
 const pokemon = await pokedexGetPokemon(name)
 const {abilities,sprites,stats,types,weight} = pokemon
 
 const container = cElem("div","","","poke-card")
 const containerStats = cElem("div","","","poke-card-stats")
 const containerTypes = cElem("div","","","poke-card-types")
 const containerTitle = cElem("div","","","poke-card-title")
 const title = cElem("h2",name,"")
 const img = cElem("img",sprites.other["official-artwork"].front_default)

 for (const type of types) {
  const typeName = cElem("p",type.type.name,type.type.name)
  containerTypes.append(typeName)
 }

 for (const stat of stats) {
  const statName = cElem("p",stat.stat.name)
  const statValue = cElem("p",stat.base_stat)
  const statBlock = cElem("div")
  statBlock.append(statName,statValue)
  containerStats.append(statBlock)
 }
 containerTitle.append(title,containerTypes)
 container.append(img,containerTitle,containerStats)
 pokeOutputLeft.replaceChildren(container)
}










/* function createEl(type="div",param) {
 const element = Object.assign(document.createElement(type), param);
 return element
} */
// const picture = createEl("img",{className:"pic-class",id:"pic-id",src:"pic.png"});