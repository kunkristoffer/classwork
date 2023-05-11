// linking
const outputArea = document.getElementById("output")
const br = document.createElement("br")
const button = document.createElement("button")
const checkbox = document.createElement('input')
                checkbox.type = 'checkbox'
const text = document.createElement("p")

// pathing
const soundPath = "sounds/"
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

function addDrum(i) {
    const button = document.createElement("button")
    button.textContent = `${soundList[i]}`

    const sound = new Audio(`${soundPath}${soundList[i]}`)

    button.addEventListener("click", () => {
        sound.currentTime = 0
        sound.pause()
        sound.play()
    })

    return button
} 

function addRythm() {
    const soundHihat = new Audio(`${soundPath}hihat.wav`)
    const soundKick = new Audio(`${soundPath}kick.wav`)
    
    const time = Audio.currentTime + 0.100;
    const beat = 120;
    const quarterBeat = 60 / beat;
    const timer = 60000 / beat;
    text.textContent = `rythm ${beat} BPM`
    
    checkbox.addEventListener("change", () => {
/*         if (this.checked) {
            setInterval(()=>{
                soundHihat.currentTime = 0
                soundHihat.play()
            },timer)
        } else {
            clearInterval()
        } */
        setInterval(()=>{
            soundHihat.currentTime = 0
            soundHihat.play()
        },timer)
        setInterval(()=>{
            soundKick.currentTime = 0
            soundKick.play()
        },timer*4)
    })
    return checkbox
}








for (let i = 0; i < soundList.length; i++) {
    outputArea.append(addDrum(i))
}
outputArea.append(br,text,addRythm(1))







// 
/* window.addEventListener("keydown", (event) => {
    // key: gir oss bokstaven
    // code: behandler numlock annerledes
    const soundFile = soundList.find((soundInfo) => {
        if (soundInfo[0] === event.key) return true
    })

    // hvis tastetrykket ikke er en gyldig lyd, returner false
    if (!soundFile) return

    console.log(soundFile)

    const sound = new Audio(soundPath + soundList[1])
    sound.play()
}) */

