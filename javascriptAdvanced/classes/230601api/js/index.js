// html elements:
const mainContainer = document.querySelector(".poke-list")

// urls:
// for index and search: https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281

// for a specific pokemon, replace "1" with a pokemon id: https://pokeapi.co/api/v2/pokemon/1/
// pokemon picture urls: { spites.other.official-artwork.front_default }

/*
<div class="card card-big">
  <h2>2. ivysaur</h2>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="">

  <div class="card-stats">
    <div class="info">
      <h3 class="height">10</h3>
      <h3 class="weight">130</h3>
      <h3 class="xp">142</h3>
    </div>

    <div class="types">
      <h3>grass</h3>
      <h3>poison</h3>
    </div>
    <div class="stats">
      <h3>hp</h3><h3>60</h3>
      <hr>
      <h3>attack</h3><h3>62</h3>
      <hr>
      <h3>defense</h3><h3>63</h3>
      <hr>
      <h3>special-attack</h3><h3>80</h3>
      <hr>
      <h3>special-defense</h3><h3>80</h3>
      <hr>
      <h3>speed</h3><h3>60</h3>
      <hr>
    </div>
  </div>
</div>
*/

function displayPokemonDetails(data) {

  // id, name, img, 

  const { id, name, height, weight, base_experience, types, stats } = data
  const imgSrc = data.sprites.other["official-artwork"].front_default



  const container = document.createElement("div")
  container.classList = "card card-big"

  const title =  document.createElement("h2")
  title.textContent = `${data.id}. ${data.name}`
  
  const img = document.createElement("img")
  img.src = imgSrc
  img.alt = `Picture of a ${data.name}`

  const statsContainer = document.createElement("div") //
  statsContainer.className = "card-stats"

  const baseInfoContainer = document.createElement("div")
  baseInfoContainer.className = "info"

  const heightEl =  document.createElement("h2")
  heightEl.textContent = `${height/10} m`

  const weightEl =  document.createElement("h2")
  weightEl.textContent = `${weight/10} kg`

  const xpEl =  document.createElement("h2")
  xpEl.textContent = `${base_experience} XP`

  baseInfoContainer.append(heightEl, weightEl, xpEl)


  // create the types elements:
  const typesInfoContainer = document.createElement("div")
  typesInfoContainer.className = "types"
  // types is an array of 0 or more types 

  types.forEach(type => {
    const typeEl = document.createElement("h3")
    typeEl.textContent = type.type.name
    typesInfoContainer.append(typeEl)
  })



  // create the stats elements:
  const statsInfoContainer = document.createElement("div")
  statsInfoContainer.className = "stats"
  // stats is an array of all stats

  console.log(stats[0].stat.name)
  console.log(stats[0].base_stat)

  stats.forEach(stat => {
    // h3, h3, hr

    const name = document.createElement("h3")
    name.textContent = stat.stat.name

    const value = document.createElement("h3")
    value.textContent = stat.base_stat

    const hr = document.createElement("hr")
    statsInfoContainer.append(name, value, hr)
  })

  // 
  //statsContainer.append(baseInfoContainer, statsInfoContainer)

  // finally append everything to the main container
  container.append(title, img, statsContainer, typesInfoContainer)

  // clear the page and display new content
  mainContainer.innerHTML = ""
  mainContainer.append(container)
}
 
// creates and returns html elements of a pokemon card
async function pokemonCard(data) {
  // get additional pokemon data:
  const detailData = await getApi(data.url)
  
  const container = document.createElement("div")
  container.className = "card"

  const title =  document.createElement("h2")
  title.textContent = `${detailData.id}. ${data.name}`
  
  const img = document.createElement("img")
  img.src = detailData.sprites.other["official-artwork"].front_default
  img.alt = `Picture of a ${data.name}`

  container.addEventListener("click", () => displayPokemonDetails(detailData))

  container.append(title, img)

  return container
}

// list 
async function pokemonList() {

  // get data...
  const pokemonData = await getApi("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")

  // loop through pokemon results array and for each await and create the html elements
  for (const pokemon of pokemonData.results) {
    mainContainer.append(await pokemonCard(pokemon))
  }
}

pokemonList()
// mainContainer.append(pokemonDetails())
// mainContainer.append(pokemonCard())


// given a url, fetch and return api data
async function getApi(url) {
  // make a request:
  const request = await fetch(url)
  // check if request is ok ?
  if (request.status !== 200) return

  const data = await request.json()

  return data
}

