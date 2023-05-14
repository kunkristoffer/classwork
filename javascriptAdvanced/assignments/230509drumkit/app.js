// linking
const outputArea = document.getElementById("output")
const infoArea = document.getElementById("info")
const br = document.createElement("br")

// pathing
const soundPath = "media/sound/"
const imagePath = "media/image/"

// valid keypresses
const validKeys = [" ", "q", "w", "e", "r", "a", "s", "d"]

// available sound files
const soundList = ["kick", "hihat", "openhat", "ride", "tom", "snare", "tink", "clap"]

// constructor used to make every drum clickable
class drumElement {
    constructor (i) {
        // contains all basic information needed
        // takes input from const new
        this.name = soundList[i],
        this.img = `${imagePath}${soundList[i]}.png`
        this.sound = `${soundPath}${soundList[i]}.wav`
        this.key = validKeys[i]
    }

    // class function plays audio on click
    // returns an div to be appended to document later
    addDrum(i) {
        const sound = new Audio(`${this.sound}`)
        const div = document.createElement("div")
        const img = document.createElement("img")
        const span = document.createElement("span")
        const para = document.createElement("p")

        para.textContent = validKeys[i]
        img.src = this.img

        span.appendChild(para)
        div.append(img, span)
        div.classList.add("drum",this.name);

        div.addEventListener("click", () => {
            sound.currentTime = 0
            sound.pause()
            sound.play()
        })

        return div
    }
}

// Creates a listener for keydown events and compares .key to validkeys index and returns position.
// function then plays corresponding sound from soundList position.
document.addEventListener("keydown", (event) => {
    const soundNumber = validKeys.findIndex(element => element == event.key)
    if (soundNumber < 0) return

    const sound = new Audio(`${soundPath}${soundList[soundNumber]}.wav`)
    sound.currentTime = 0
    sound.pause()
    sound.play() 
})

// loops over soundlist to get every type of drum and append to #drumkit
for (let i = 0; i < soundList.length; i++) {
    let drum = new drumElement(i)
    outputArea.append(drum.addDrum(i))
}


// toDo
// scale: 1.1 on event


// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
// https://www.javascripttutorial.net/es6/javascript-array-find/

// Sjekk ut senere
// https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript



