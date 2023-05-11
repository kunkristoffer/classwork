// linking
const outputArea = document.getElementById("output")
const br = document.createElement("br")
const button = document.createElement("button")
const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
const text = document.createElement("p")

// pathing
const soundPath = "media/sounds/"
const imagePath = "media/img/"

// valid keypresses
const validKeys = ["Space", "q", "w", "e", "i", "o", "p"]

// available sound files
const soundList = [
    "clap.wav",
    "hihat.wav",
    "kick.wav",
    "openhat.wav",
    "ride.wav",
    "snare.wav",
    "tink.wav",
    "tom.wav"
]

// let playSound = () => new Audio("media/test/clap.wav").play()
class drumElement {
    constructor (name, variant) {
        this.name = name,
        this.img = `media/img/${name}${variant ? variant : ""}.png`
        this.sound = `media/test/${name}${variant ? variant : ""}.wav`
        // add keypress her?
    }
    
}







function addDrum(type) {
    
}

console.log(sound1)


/* 
my drum kit

stage 1:
create object that has file name, img, sound and keypress
create new using object and append to output

Stage Bonus:
add backing rhythm


*/