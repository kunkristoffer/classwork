import {outputNews,outputWeather} from "./index.js"
import {weatherData,newsData} from "./data.js"

export function weatherDataOutputHtml() {
 const imgNow = document.createElement("img")
 const imgTomorrow = document.createElement("img")
 const paraNow = document.createElement("p")
 const paraTomorrow = document.createElement("p")
 imgNow.classList.add("weather-icon")
 imgNow.src = `./media/weathericons/png/${weatherData.timeseries[0].data.next_1_hours.summary.symbol_code}.png`
 paraNow.textContent = "today is looking"

 imgTomorrow.classList.add("weather-icon")
 imgTomorrow.src = `./media/weathericons/png/${weatherData.timeseries[24].data.next_1_hours.summary.symbol_code}.png`
 paraTomorrow.textContent = "but tomorrow is "
 outputWeather.append(paraNow, imgNow, paraTomorrow,imgTomorrow)
}

export function newsDataOutputHtml() {
 const items = newsData.querySelectorAll("item");
 items.forEach(el => {
  const para = document.createElement("p")
  para.textContent = el
  outputNews.append(para)
 })
}