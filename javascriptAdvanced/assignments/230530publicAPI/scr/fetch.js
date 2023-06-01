import {} from "./index.js"
import {updateLocalStorage,localStorageKeyWeather,localStorageKeyNews,newsData} from "./data.js"


/**
 * gathers data from https://api.met.no/weatherapi/locationforecast/2.0/documentation#/
 * lets choose bergen @ 60.3913° N, 5.3221° E
 */
export async function weatherRequest() {
 // https://api.met.no/weatherapi/locationforecast/2.0/documentation
 const weatherFetch = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.39&lon=5.32")
 const weatherData = await weatherFetch.json()

 updateLocalStorage(localStorageKeyWeather, weatherData.properties)
}

export async function newsRequest() {
 // https://www.nrk.no/rss/
 const newsFetch = await fetch("https://www.nrk.no/nyheter/siste.rss")
 const newsDataTmp = await newsFetch.text()
 const newsXml = new DOMParser().parseFromString(newsDataTmp, "text/xml")
 
console.log(newsData);
console.log("newsDataTmp"+ typeof newsDataTmp);
console.log(newsXml);

 updateLocalStorage(localStorageKeyNews, newsXml)
}

export async function newsRequest2() {
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => console.log(data))
}


// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 
// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 
// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 

/**
 * Requests data in desired format
 * @param {*} type type of data; object or xml
 * @param {*} url url of api endpoint
 */
async function apiRequest(type,url) {
 try {
  const request = await fetch(url)
 }
 catch(error) {

 }
}

// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 
// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 
// ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO ToDO 