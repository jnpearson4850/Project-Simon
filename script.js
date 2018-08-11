
//make buttons
let green = document.querySelector('#circle1')
let red = document.querySelector('#circle2')
let blue = document.querySelector('#circle3')
let orange = document.querySelector('#circle4')
let purple = document.querySelector('#circle5')
let reset = document.querySelector('#reset')
let modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//event listener for buttons
reset.addEventListener('click', function () {
    location.reload('Start Over')
})
purple.addEventListener('click', purpleClicked)
orange.addEventListener('click', orangeClicked)
blue.addEventListener('click', blueClicked)
red.addEventListener('click', redClicked)
green.addEventListener('click', greenClicked)

//dircetions modal
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// event listeners for start button to  generate random order of colors
let colors = ["green", "red", "blue", "orange", "purple"];
let cpuMoves = [];
function startGame() {
    var generateMove = [];
    for (let i = 0; i < colors.length; i++) {
        generateMove.push(colors[Math.floor(Math.random() * colors.length)])
    }
    cpuMoves = generateMove
    console.log(cpuMoves)
}
// next level function. same as startGame
function startGame() {
    var generateMove = [];
    for (let i = 0; i < colors.length; i++) {
        generateMove.push(colors[Math.floor(Math.random() * colors.length)])
    }
    cpuMoves = generateMove
    console.log(cpuMoves)
}
// buttons are now an array
// let buttons = [green, red, blue, orange, purple];


//array to store user clicks. 
let userClicks = [];

//function to generate light
function lightUp(e) {
    e.target.classList.add('clicked')
}
function dim(e) {
    e.target.classList.remove('clicked')
}
//function when each button is clicked. 
function purpleClicked(e) {
    userClicks.push("purple")
    lightUp(e)
    console.log(userClicks);
    compareCLicks();
    
}
function orangeClicked(e) {
    userClicks.push("orange")
    lightUp(e)
    console.log(userClicks)
    compareCLicks();
}
function blueClicked(e) {
    userClicks.push("blue")
    lightUp(e)
    console.log(userClicks)
    compareCLicks();
}
function redClicked(e) {

    userClicks.push("red")
    lightUp(e)
    console.log(userClicks)
    compareCLicks();
}
function greenClicked(e) {
    userClicks.push("green")
    lightUp(e)
    console.log(userClicks)
    compareCLicks();
}

//  compare players input to computer using for loop and conditional outside 4 loop 
function compareCLicks () {
    var userClicksNumber = userClicks.length;
    for (var i = 0; i < userClicksNumber; i++){
        if(userClicks[i] !== cpuMoves[i]){
            alert("Wrong, press Try Again")
        }

    } 
    if (cpuMoves[i] === userClicks[i] ) {
        alert("Great Job! Press TRY AGAIN then NEXT LEVEL to continue playing")
    }
}
