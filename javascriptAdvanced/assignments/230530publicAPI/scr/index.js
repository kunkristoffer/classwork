import {weatherData,newsData} from "./data.js"
import {weatherRequest,newsRequest,newsRequest2} from "./fetch.js"
import {weatherDataOutputHtml,newsDataOutputHtml} from "./html.js"

// output DOM 
export const outputNews = document.getElementById("output-news")
export const outputWeather = document.getElementById("output-weather")

// event listeners
// const buttonOutputWeather = document.getElementById("button-get-weather").addEventListener("click", weatherRequest)
const buttonOutputNews = document.getElementById("button-get-news").addEventListener("click", newsRequest2)

// if localstorage is empty, or out of date fetch new data
// https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/#why-do-we-need-an-additional-constructor-check
if (Object.keys(weatherData).length === 0 && weatherData.constructor === Object) {
 weatherRequest()
}

if (Object.keys(newsData).length === 0 && newsData.constructor === Object) {
 newsRequest()
}

// outputs data to DOM
weatherDataOutputHtml();
newsDataOutputHtml();