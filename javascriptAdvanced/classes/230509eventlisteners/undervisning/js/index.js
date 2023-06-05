// mappen med lydfiler:
const soundFolder = "sounds/"

// array med lydfiler:
const soundList = [
    "clap.wav",
    "hihat.wav",
    "kick.wav",
    "openhat.wav",
    "ride.wav",
    "snare.wav",
    "tink.wav",
    "tom.wav",
]

const drumkitContainer = document.getElementById("drumkit")

// lag en button, en audio element, med eventlistener og returner button elementet
function drum(soundFolderAndFilename) {
    const button = document.createElement("button")
    button.textContent = soundFolderAndFilename

    const sound = new Audio(soundFolderAndFilename)

    button.addEventListener("click", () => {
        sound.play()
    })

    return button
} 

// loop gjennom soundList arrayet og returner et nytt array som inneholder: en button, en audio element, med eventlistener 
const drumkitElements = soundList.map((sound) => {
    return drum(soundFolder + sound)
})

// pakk opp innholdet fra arrayet slik at det kan appendes til drumkitContainer
drumkitContainer.append(...drumkitElements)