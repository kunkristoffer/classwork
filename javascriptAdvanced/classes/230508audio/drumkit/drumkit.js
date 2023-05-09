const drumkitContainer = document.querySelector("drumkit")

// mappen med lydfiler
const soundFolder = "media/"

// array med lyder
soundList = [
    "snare.wav",
]

// Lag en button, og en audio element
function drum(soundfile) {
    const button = document.createElement("button")
    button.textContent = soundfile

    const sound = new Audio(soundfile)

    // anonym funksjon i parameter til addeventlistener
    /* button.addEventListener("click", function(){
        console.log("PLAY!")
    }) */
    // men bruker heller en anonym arrow funksjon
    button.addEventListener("click", () => {
        sound.play()
    })

    // hadde kun funket i 1 tilfelle
    /* drumkitContainer.append(button) */

    // bruk heller return 
    return button
};

soundList.forEach((sound, index) => {
    // drumkitContainer.append(drum(soundFolder + sound))
    console.log(sound)    
});

soundList.map((sound, index) => {
    console.log(sound)  
    return  
});

console.log(
    soundList.map((sound, index) => {
        console.log(sound)    
    })
)

// loop gjennom soundLList arraeyet og returnerer et nytt array som inneholder:
const drumkitElements = soundList.map((sound) => {
    return drum(soundfolder + sound)
})

// .append kan kun ligge til nodes, isje et array
let myArray = ["abc", "def", "ghi"]
console.log(...myArray)

// pakk opp innholdet fra arraeyet slik at det kan appendes til drumkitContainer
drumkitContainer.append(...drumkitElements)