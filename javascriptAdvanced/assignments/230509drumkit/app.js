// linking
const outputArea = document.getElementById("output")
const br = document.createElement("br")

// pathing
const soundPath = "media/sound/"
const imagePath = "media/image/"

// valid keypresses
const validKeys = [" ", "q", "w", "e", "r", "i", "o", "p"]

// available sound files
const soundList = [
    "clap",
    "hihat",
    "kick",
    "openhat",
    "ride",
    "snare",
    "tink",
    "tom"
]

class drumElement {
    constructor (i) {
        this.name = soundList[i],
        this.img = `${imagePath}${soundList[i]}.png`
        this.sound = `${soundPath}${soundList[i]}.wav`
        this.key = validKeys[i]
    }
    addDrumElement() {
        const img = document.createElement("img")
        img.src = this.img
        const sound = new Audio(`${this.sound}`)

        img.addEventListener("click", () => {
            sound.currentTime = 0
            sound.pause()
            sound.play()
        })

        window.addEventListener("keydown", (event) => {
            if (this.key === event.key) {
                sound.currentTime = 0
                sound.pause()
                sound.play()
            }
        })

        return img
    }
}


for (let i = 0; i < soundList.length; i++) {
    let test = new drumElement(i)
    outputArea.append(test.addDrumElement(i))
}




















