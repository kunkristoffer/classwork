export const localStorageKeyWeather = "apiWeatherData"
export const localStorageKeyNews = "apiNewsData"

export let weatherData = JSON.parse(localStorage.getItem(localStorageKeyWeather)) || {};
export let newsData = JSON.parse(localStorage.getItem(localStorageKeyNews)) || {};

/**
 * 
 * @param {*} type Name of localstorage key
 * @param {*} data json
 */
export function updateLocalStorage(type, data) {
 localStorage.setItem(type, JSON.stringify(data))
}