import {} from "./index.js"
import {updateLocalStorage,localStorageKeyWeather,localStorageKeyNews} from "./data.js"


/**
 * gathers data from https://api.met.no/weatherapi/locationforecast/2.0/documentation#/
 * lets choose bergen @ 60.3913° N, 5.3221° E
 */
export async function weatherRequest() {
 const weatherFetch = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.39&lon=5.32")
 const weatherData = await weatherFetch.json()

 updateLocalStorage(localStorageKeyWeather, weatherData.properties)
}

export async function newsRequest() {
 const newsFetch = await fetch("https://www.nrk.no/toppsaker.rss")
 const newsData = await newsFetch.text()
 const newsXml = new window.DOMParser().parseFromString(newsData, "text/xml")
 
 updateLocalStorage(localStorageKeyNews, newsData)
}