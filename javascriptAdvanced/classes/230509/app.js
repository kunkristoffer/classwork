// Key mapping & event listener notes
// It is sometimes useful to “map certain keys” to certain things, for example in the case a drumkit we could trigger the playing of certain sounds based on specific key presses. 
// Let’s say we have the following sound files that we want to work with:
// "clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"
// Suppose we want to map the keys "q" to "clap.wav", "w" to "hihat.wav", there are a couple of different ways to do so: */





// 1. Using two arrays in parallell, one to store name of sounds, and another to store the keys:
const soundList = [
"clap.wav",
"hihat.wav",
// etc...
]
const keys = [
"q",
"w",
// etc...
]

// We get the sound name `hihat.wav` by using the `indexOf()` method to find the index of the `"w"` key in the `keys` array, 
// and then using that index to retrieve the corresponding sound file name from the `soundList` array using array indexing notation.
// While this approach may be simple to understand, it requires us to keep track of two separate arrays, 
// if we make a change to one of the arrays we have to update the other array to match the changes.
console.log(
    soundList[keys.indexOf("w")]
)





// 2. Using an array of arrays (often called a 2D array) where each sub-array is a pair of key and value:
const sounds = [
["q", "clap.wav"],
["w", "hihat.wav"],
//etc...
]

// Then we use the find method to find the sub-array where the first element (index 0, val[0]) matches the key (=== "w") we're looking for. 
// The second element of that sub-array (index 1) is the associated value.
const soundFile = sounds.find((val) => val[0] === "w")
    console.log(soundFile[1]) // "hihat.wav"
// This approach is easier to maintain, but using the find-method in order to find a value based on a key may not be the most intuitive.
// Solutions using objects, which are similar to approach #2 in a way: 3a, using they keyboard-key as object key:
const sounds = [
{ q: "clap.wav" },
{ w: "hihat.wav" },
//etc...
]





// 3b, instead of using the keyboard-key as object key, we define key-value pairs for both the keyboard key, and the soundfile:
const sounds = [
{ key: "q", sound: "clap.wav" },
{ key: "w", sound: "hihat.wav" },
//etc...
]
// Similarly to approach #2 we use the Array.find method to find the correct sound.
// The advantage here is that with objects we can reference our data by the name of they key, rather than a numerical index (so, val.key instead of val[0] and such).
const soundFile = sounds.find((val) => val.key === "w")
console.log(soundFile.sound)
// While solutions 3a and 3b appear equally good initially, they posed a challenge for us when we needed to handle the EventListeners, to illustrate, 
// from our drum() function in present form it works well with solution 3b:
// lag en button, en audio element, med eventlistener og returner button elementet
function drum(folder, fileInfo) {
    const button = document.createElement("button")
    button.textContent = fileInfo.fileName
    const sound = new Audio(folder + fileInfo.fileName)
    button.addEventListener("click", () => playSound(sound))
    return button
}

// But, to make it work with solution 3a, we had to use the Object.values attribute in order to grab the correct filename, heres excerpt of the changes that needed to be made to the drum() function:
function drum(folder, fileInfo) {
    // …existing code
    const fileName = Object.values(fileInfo)
    button.textContent = fileName
    const sound = new Audio(folder + fileName)
    // existing code…
}
// Explanation: so the fileInfo parameter in the example above contains an object with just two properties, for example: { q: "clap.wav" }
// Objects work on key-value basis, so in order to get the "clap.wav" text, we need to know the key,
// we know the key is “q”, but that is only true for the first sound, for all other sounds the key changes to each their key.
// Object.valujes allows us to grab the value of the object property directly

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find



// Notes on AddEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp


// Syntax for adding events is the following:
element.addEventListener("type-of-event", yourFunction )

// Where element can be any part of the page (a button, or any other html tag for that matter, or even the entire window or document).
// Type-of-event is the type of event we are “listening for”, for example “click”, “mousedown”, “keydown” etc.
// The yourFunction part is where we put the logic for things we want to happen when the event is triggered. This type of function is called “a callback function”. 
// There are two ways to define this type of function:


// 1. Using an anonymous function, for example:
button.addEventListener("click", () => {
    // code within this code block 
    // will only execute when the 
    // event is triggered
});

// Same as above example but not using the arrow function syntax:
button.addEventListener("click", function() {
    // code within this code block 
    // will only execute when the 
    // event is triggered
})



// 2. Using a named function, here we tell this event that we want it to run a previously defined function called “handleClick” 
// (notice: there are no parenthesis behind the function name, this is important because we only want to supply the name of the function without running it yet):
button.addEventListener("click", handleClick)

// Using named function looks more “clean”, but using anonymous functions give us more “flexibility”.
// It is very common to combine the two. For example like so:
button.addEventListener("click", () => playSound(sound))
// Also, addEventListener automatically sends information about the event to the “callback function”, but notice in the above examples we are not defining any parameters. 
// To define it we can do it like so:
button.addEventListener("click", (event) => playSound(sound, event))
// Or
button.addEventListener("click", function(event) {
    // code within this code block 
    // will only execute when the 
    // event is triggered
console.log(event)
})
// Or
button.addEventListener("click", function(event) {
console.log(event)
playSound(sound)
})
// In order to add events based on keypress we implemented the following event listener, and attached t to the window object (we could have also attached it to the document object). 
// Here we’re using event.key property to read the key value, then we use the Array.find method to see if the event.key exists in our soundFile array, 
// if it does not we terminate the function with the if (!soundFile) return statement, and otherwise we create the Audio instance with the given filename.
window.addEventListener("keydown", (event) => {
    const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key)
    if (!soundFile) return
    const sound = new Audio(soundFolder + soundFile.fileName)
    playSound(sound)
})