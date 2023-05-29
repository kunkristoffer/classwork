/** contains localstorage string key value */
const localStorageKey = "cwdtCharacterStats"

/** Fetches todolist array from localstorage or creates default character details */
export let cwdtConfig = JSON.parse(localStorage.getItem(localStorageKey)) || {
 class: "saboteur",
 life: 2000,
 energyshield: 200,
 ward: 1200,
 chaosresistance: -60,
 divergentpercent: 0,
 heartbound: false,
 skeletonlevel: 20,
 forbiddenrite: true
}

/** Updates localstorage with data from array */
export function updateLocalStorage() {
 localStorage.setItem(localStorageKey, JSON.stringify(cwdtConfig))
}

// Available classes
export const cwdtConfigClasses = ["ascendant","saboteur","pathfinder","other"]