import {outputNews,outputWeather} from "./index.js"
import {weatherData,newsData} from "./data.js"

function htmlWeatherIcon(input) {
 const htmlImg = document.createElement("img")
 htmlImg.classList.add("weather-icon")
 htmlImg.src = `./media/weathericons/png/${input}.png`
 return htmlImg
}

function htmlText(input) {
 const htmlPara = document.createElement("p")
 htmlPara.textContent = input
 return htmlPara
}

export function weatherDataOutputHtml() {
 const greetingContainer = document.createElement("div")
 const weather1h = htmlWeatherIcon(weatherData.timeseries[0].data.next_1_hours.summary.symbol_code)
 const weather24h = htmlWeatherIcon(weatherData.timeseries[24].data.next_1_hours.summary.symbol_code)
 const greeting = htmlText("welcome back ${user}, You better be ready for some")
 const tomorrowP = htmlText("today, followed by")
 const tomorrowA = htmlText("tomorrow")
 greetingContainer.append(greeting, weather1h, tomorrowP, weather24h,tomorrowA)

 const timeSpan = [1,12,24,36,48]
 const timeSpanContainer = document.createElement("div")
 for (let i = 0; i < timeSpan.length; i++) {
  const test = htmlText(timeSpan[i]+"h")
  const weather = htmlWeatherIcon(weatherData.timeseries[timeSpan[i]].data.next_1_hours.summary.symbol_code)
  timeSpanContainer.append(test, weather)
 }

 outputWeather.append(greetingContainer,timeSpanContainer)
}

export function newsDataOutputHtml() {
 const items = newsData.querySelectorAll("item");
 items.forEach(el => {
  const para = document.createElement("p")
  para.textContent = el
  outputNews.append(para)
 })
}