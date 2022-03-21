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
    let today = new Date(threeWeeksOut.valueAsNumber);
    date = new Date().setDate(today.getDate() + 22);
    let endDate = new Date(date)
    var month 
    var year = endDate.getFullYear()
    if (endDate.getDate() > today.getDate()){
        month =  endDate.getMonth() + 1
    } else {
        if (month == 12) {
            year += 1
        }
        month = (endDate.getMonth() + 1) % 12
    } 

    dateSpan.innerText = month + "/" + endDate.getDate() + "/" + year
    console.log(endDate);
    //gets the current time to compare to the total shift time
}

function dateString(date){
    date.getYear()

}

//Calculates if the client can go home based on the current time and their clockout time 
function isItLate() {
    let date = new Date();
    let now = (date.getHours() * 3600) + (date.getMinutes() * 60);
    if((totalSeconds - now) < 60) {
        alert("Get the fuck out of here!");
    } else {
        alert("Sorry, you're stuck here");
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