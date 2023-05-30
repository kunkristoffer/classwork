// output DOM 
const output = document.getElementById("output")
const div = document.createElement("div")
const para = document.createElement("p")

// Resources
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Blob












function callback() {
 para.textContent = Math.random()
 output.append(para)
}


setTimeout(callback, 250)

// Istedet for callback-hell som dette kan vi bruke promises
setTimeout(()=>{
 callback()
 setTimeout(()=>{
  console.log("and then...", Math.random())
  setTimeout(()=>{
   console.log("and then...", Math.random())
   setTimeout(()=>{
    console.log("and then...", Math.random())
   },250)
  },500)
 },1000)
},1500)



const myPromise = new Promise(function(resolve, reject) {
 setTimeout(resolve,2500)
})

function timer(delayMs) {
 const myPromise = new Promise(function(resolve, reject) {
  setTimeout(resolve,2500)
 })

 return myPromise
}

console.log(myPromise)

myPromise.then(()=>{

})

timer(1000).then(()=>{
 console.log("Still loading");
})
timer(500).then(()=>{
 console.log("Loading");
})


const msgArr = [
 "Alpha",
 "Bravo",
 "Charlie",
 "Delta",
 "Golf"
]

// Async await
async function messages() {
 console.log("loading messages...")

 // await kan brukes i en async function og kjører koden etter satt delay
 // hvis du har flere så teller rekkefølgen
 await timer(2500)
 console.log("first await")
 // timer #2 kjører kun etter #1
 await timer(250)
 console.log("second await")

 // du kan også awaite hver iterasjon i array
 for (const msg of msgArr) {
  await timer(100)
  console.log(msg);
 }

 // forEach bør ikke brukes sammen med async/wait
 // koden som kjøres inni her sittes til side
 msgArr.forEach(async (msg)=>{
  await timer(100)
  console.log(msg);
 })
}

messages()


// fetch henter kun response, ikke body content
//
fetch("htttps://cataas.com/cat?json=true")
.then((request)=>{
 console.log(request);
 // .text() prøver å behandle readableStream om til en text
 // men vi bruker .json() for å å beholde formatet 
 // men .json er egentlig bare JSON.parse(request.text())
 return request.json()
})
.then((data)=>{
 // Hvis du vill ha tilgang til dataen fra fetch må du gjøre det her.
 displayCat(data)
})

async function displayCat(catData) {
 console.log(catData);
}

/* men du kan også sitte .fetch inn i en function / const */
async function getCatData() {
 const requestCat = await fetch("htttps://cataas.com/cat?json=true")
 const dataCat = await requestCat.json()
 
 displayCat(dataCat)
}