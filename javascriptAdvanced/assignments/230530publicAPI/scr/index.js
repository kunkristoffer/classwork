import {weatherData,updateLocalStorage} from "./data.js"
import {WeatherRequest,newsRequest} from "./fetch.js"
import {weatherDataOutputHtml,newsDataOutputHtml} from "./html.js"

// output DOM 
export const outputNews = document.getElementById("output-news")
export const outputWeather = document.getElementById("output-weather")

// event listeners
const buttonOutputWeather = document.getElementById("button-get-weather").addEventListener("click", WeatherRequest)
const buttonOutputNews = document.getElementById("button-get-news").addEventListener("click", newsRequest)

// outputs data to DOM
weatherDataOutputHtml()
newsDataOutputHtml()