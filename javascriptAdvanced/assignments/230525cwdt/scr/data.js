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

// Table of cast when damage taken data
export const cwdt = [528, 583, 661, 725, 812, 897, 1003, 1107, 1221, 1354, 1485, 1635, 1804, 1980, 2184, 2394, 2621, 2874, 3142, 3272, 3580, 3950, 4350, 4780, 5240, 5730, 6250, 6800, 7380, 7990, 8310, 8630, 8965, 9300, 9650, 10000, 10365, 10730, 11110, 11490]

// calculations
export let skeletons = 0
export let skeletonDamage = 0
export let forbiddenDamage = 0
export let totalDamage = 0

export function updateCalculations() {
 skeletons = cwdtConfig.skeletonlevel >= 21 ? 4 : cwdtConfig.skeletonlevel >= 11 ? 3 : 2
 skeletonDamage = cwdtConfig.heartbound ? skeletons * 420 * 2 : skeletons * 420
 forbiddenDamage = cwdtConfig.forbiddenrite ? (cwdtConfig.life * 0.4 + cwdtConfig.energyshield * 0.25) * (1 - cwdtConfig.chaosresistance / 100) : 0;
 totalDamage = cwdtConfig.class === "saboteur" ? (skeletonDamage + forbiddenDamage) * 2 : skeletonDamage + forbiddenDamage;
}