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



function logic(){
    if(threeWeeksOut.value === "") {
        endDate = new Date()
    }
    else {
        endDate = new Date(threeWeeksOut.valueAsNumber + 86400000);   
    }
    endDate.setDate(endDate.getDate() - 21);

    let dd = endDate.getDate();
    let mm = endDate.getMonth() + 1; // 0 is January, so we must add 1
    let yyyy = endDate.getFullYear();

    var dateString = mm + "/" + dd + "/" + yyyy;
    dateSpan.innerText = dateString;
}

//Calculates if the client can go home based on the current time and their clockout time 
function isItLate() {
    tempEndDate = new Date();
    console.log(tempEndDate)
    console.log(endDate)
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