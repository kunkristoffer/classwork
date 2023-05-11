// linking
const outputArea = document.getElementById("output")
const br = document.createElement("br")

// pathing
const soundPath = "media/sound/"
const imagePath = "media/image/"

// valid keypresses
const validKeys = [" ", "q", "w", "e", "r", "a", "s", "d"]

// available sound files
const soundList = [
    "kick",
    "hihat",
    "openhat",
    "ride",
    "tom",
    "snare",
    "tink",
    "clap"
]

class drumElement {
    constructor (i) {
        this.name = soundList[i],
        this.img = `${imagePath}${soundList[i]}.png`
        this.sound = `${soundPath}${soundList[i]}.wav`
        this.key = validKeys[i]
    }
    addDrumElement() {
        const sound = new Audio(`${this.sound}`)
        const img = document.createElement("img")
        img.src = this.img
        img.classList.add(this.name);

        img.addEventListener("click", () => {
            sound.currentTime = 0
            sound.pause()
            sound.play()
        })

        document.addEventListener("keydown", (event) => {
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
    let drum = new drumElement(i)
    outputArea.append(drum.addDrumElement(i))
}

// toDo
// scale: 1.1 on event