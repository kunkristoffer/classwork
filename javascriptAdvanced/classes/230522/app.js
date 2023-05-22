// defining DOM fields
const inputField = document.getElementById("inputJS")
const outputField = document.getElementById("outputJS")

// options to define DateTimeFormat output
const testDateOptions = {
 weekday: "long",
 year: "numeric",
 month: "long",
 day: "numeric",
 hour: "numeric",
 minute: "numeric"
}

// date vs datetimeformat
const testDate = Date.now()
const testDate2 = new Intl.DateTimeFormat("en-US", testDateOptions)
const testDate3 = new Intl.RelativeTimeFormat('en', { style: 'short' });

outputField.append(testDate)
outputField.append(document.createElement("br"))
outputField.append(testDate2.format(testDate),)
outputField.append(document.createElement("br"))
outputField.append(testDate3.format(-1, "day"))


// hvordan rendre days ago dynamisk
const daysAgo = 1000 * 60 * 60 * 24

function getRelativeTime(timestamp) {
 const relativeTF = new Intl.RelativeTimeFormat('en', {
   numeric: 'auto',
 });
 const daysDifference = Math.round(
   (timestamp - new Date().getTime()) / daysAgo,
 );
 // console.log(daysDifference)
 return relativeTF.format(daysDifference, 'day');
}

function howLongAgo(timestamp) {
 const relativeTF = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
 });

 const value = timestamp - Date.now();
 let valueDifference = 0;
 let differenceType = "";

 switch (true) {
  case (value > 1000 * 60 * 60 * 24 * 7):
   valueDifference = Math.round(value / 1000 / 60 / 60 / 24 / 7 * 100)
   differenceType = 'days'
   break;
  case (value > 1000 * 60 * 60 * 24):
   valueDifference = Math.round(value / 1000 / 60 / 60 / 24 * 100)
   differenceType = 'hours'
   break;
  case (value > 1000 * 60 * 60):
   valueDifference = Math.round(value / 1000 / 60 / 60 * 100)
   differenceType = 'minutes'
   break;
  case (value > 1000 * 60):
   valueDifference = Math.round(value / 1000 / 60 * 100)
   differenceType = 'seconds'
   break;

  default:
  console.log(value <= 1000 * 60 * 60)
 }

 console.log(Date.now() - timestamp)

 return relativeTF.format(valueDifference, "day");
 
}


function timeSince(date) {
 var seconds = Math.floor((new Date() - date) / 1000);
 var interval = seconds / 31536000;

 if (interval > 1) {
   return Math.floor(interval) + " years";
 }
 interval = seconds / 2592000;
 if (interval > 1) {
   return Math.floor(interval) + " months";
 }
 interval = seconds / 86400;
 if (interval > 1) {
   return Math.floor(interval) + " days";
 }
 interval = seconds / 3600;
 if (interval > 1) {
   return Math.floor(interval) + " hours";
 }
 interval = seconds / 60;
 if (interval > 1) {
   return Math.floor(interval) + " minutes";
 }
 return Math.floor(seconds) + " seconds";
}
var aDay = 24*60*60*1000;

outputField.append(document.createElement("br"))
outputField.append(getRelativeTime(new Date('2022-08-15').getTime()));
outputField.append(document.createElement("br"))
outputField.append(getRelativeTime(new Date().getTime()));
outputField.append(document.createElement("br"))
outputField.append(howLongAgo(1684744332185));
outputField.append(document.createElement("br"))
outputField.append(timeSince(new Date(Date.now()-aDay)));
outputField.append(document.createElement("br"))
outputField.append(timeSince(new Date(Date.now()-aDay*2)));
outputField.append(document.createElement("br"))


