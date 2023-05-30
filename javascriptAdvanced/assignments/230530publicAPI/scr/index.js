import {weatherData,newsData} from "./data.js"
import {weatherRequest,newsRequest} from "./fetch.js"
import {weatherDataOutputHtml,newsDataOutputHtml} from "./html.js"

// output DOM 
export const outputNews = document.getElementById("output-news")
export const outputWeather = document.getElementById("output-weather")

// event listeners
const buttonOutputWeather = document.getElementById("button-get-weather").addEventListener("click", weatherRequest)
const buttonOutputNews = document.getElementById("button-get-news").addEventListener("click", newsRequest)

// if localstorage is empty, fetch new data
if (weatherData.length == 0) {
 weatherRequest()
}
if (newsData.length == 0) {
 newsRequest()
}

// outputs data to DOM
weatherDataOutputHtml()
newsDataOutputHtml()