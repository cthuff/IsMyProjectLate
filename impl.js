var dark;
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(matched) {
    darkMode();
    dark = true; }
else {
    lightMode();
    dark = false;
}
//Handles Toggling between Dark and Light Mode
function toggle(){
    if (dark == true)
    {
        document.getElementById("darkMode").innerText = "DarkMode"
        lightMode();
    } else {
        document.getElementById("darkMode").innerText = "LightMode"
        darkMode();
    }
}
//Does the necessary switching of elements colors from Light to Dark
function darkMode() {
  var element = document.body;

  document.getElementById("webpage").style.color = "#82EC5A";
//   document.getElementById("file").style.color =  "#82EC5A";
  element.className = "dark-mode";
  dark = true;
}
//Does the necessary switching of elements colors from Dark to Light
function lightMode() {
  var element = document.body;

  document.getElementById("webpage").style.color =  "#3A940E";
//   document.getElementById("file").style.color =  "#3A940E";
  element.className = "light-mode";
  dark = false;
}

//the HTML elements that will be manipulated by this code
var threeWeeksOut = document.getElementById("threeWeeksOut");
var dateSpan = document.getElementById("dateSpan");
threeWeeksOut.addEventListener("input", function() { logic(); }, false);


var endDate;
var today;
function logic(){
    
    today = new Date(threeWeeksOut.valueAsNumber + 86400000);
    date = new Date().setDate(today.getDate() - 21);
    endDate = new Date(date)
    if(endDate.getDate() < today.getDate()) {
        endDate.setMonth(today.getMonth())
    } else {
        endDate.setMonth(today.getMonth() -1 )
    }
    dateSpan.innerText = endDate.toDateString();
}

function threeWeeksAgo(date){


}

//Calculates if the client can go home based on the current time and their clockout time 
function isItLate() {
    tempToday = new Date();
    tempdate = new Date().setDate(tempToday.getDate() + 21);
    tempEndDate = new Date(tempdate)
    if(tempEndDate.getDate() < tempToday.getDate()) {
        tempEndDate.setMonth(tempToday.getMonth() + 1)
    } else {
        tempEndDate.setMonth(tempToday.getMonth() )
    }

    if(tempEndDate > endDate) {
        alert("You should have asked sooner");
    } else {
        alert("Woo! You're more than 3 weeks out!");
    }
}

//This loads the time when the page first appears 
const form = document.getElementById('form');
form.onload = logic()
document.onsubmit = submit
function submit(event) {
// This prevents the form from being submitted and the page reloading
// Now when enter is pressed it will hit the "Can I Clock Out?" Button
event.preventDefault();
}