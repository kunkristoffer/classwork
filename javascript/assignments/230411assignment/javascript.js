// Information about the user Tom
const userName = "Tom";
const userAge = 18;
const userMale = false;
const userTitle = userMale ? "Mr." : "Mrs.";
const userHobbies = ["Movies", "Games", "Pets", "Long walks on a beach"];

// user statuses
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Checks if username is not empty, age is at or over 18 and that the user is not blocked
if (userName && userAge >= 18 && !userIsBlocked) {
  // if true, change login status, redirect to /home and console log a welcome msg.
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("a welcome message.");
} else {
  // Ohh no, an error occoured
  console.log("an error message.");
}

// If user is logged in, welcomes them
if (userIsLoggedIn) {
  document.getElementById("user").innerHTML = `
  You are now logged in </br>
  Welcome back ${userTitle} ${userName} </br>
  What are you feeling up for today?
  `;
}