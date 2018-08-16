
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


//come back to the below later. What you can do is, crete an empty array to pass the "cpu generate array" into it. create a function to change the colors of that array. nest that functoin into the generat emove functoin. should work. keep color change simple
// testingColors = function() {
//     var green = document.getElementById("#circle1")
//     // green.circle1 += "pulse"
//     // green.addClass("pulse")
//     green.style.webkitAnimationName = "pulse"
//     green.style.webkitAnimationDuration = "4s"
//     green.style.webkitAnimationFillMode = "forward"
//     green.style.webkitAnimationName = 'pulse'; // you had a trailing space here which does NOT get trimmed
//     // setTimeout(function() {
//     //     green.removeClass("pulse")
//     // }, 5000)
// }
//select what i want to change, add the class, set timeout, remove class
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
let colorArray =[]

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
    var timeoutTime = 0;
    var timeoutTimeDim = 0;
    for (let i = 0; i < cpuMoves.length; i++){
        timeoutTime += 1000 
        timeoutTimeDim = 500 + timeoutTime;
        lightUpArray(cpuMoves[i], timeoutTime)
        dimArray(cpuMoves[i], timeoutTimeDim)

    }
} 
function lightUpArray(color, time) {
    console.log(time)
    console.log('light up')
    if(color === 'blue'){
        setTimeout(() => {
            blue.style.background = "blue"
        }, time)
    } else if (color === "red"){
        setTimeout(() => {
            red.style.background = " red"
        }, time)
    } else if ( color === "green"){
        setTimeout(() => {
            green.style.background = "green"
        }, time)
    } else if ( color === "orange"){
        setTimeout(() => {
            orange.style.background = "orange"
        }, time)
    }else if ( color === "purple"){
        setTimeout(() => {
            purple.style.background = "purple"
        }, time)
    }
} 
function dimArray(color, time) {
    console.log(time)
    console.log("dim")
    if(color === 'blue'){
        setTimeout(() => {
            blue.style.background = "rgba(0,0,255,.2)"
        }, time)
    } else if (color === "red"){
        setTimeout(() => {
            red.style.background = "rgba(255,0,0,.2)"
        }, time)
    } else if ( color === "green"){
        setTimeout(() => {
            green.style.background = "rgba(0, 128, 0, .5)"
        }, time)
    } else if ( color === "orange"){
        setTimeout(() => {
            orange.style.background = "rgba(255,165,0,.2)"
        }, time)
    }else if ( color === "purple"){
        setTimeout(() => {
            purple.style.background = "rgba(128,0,128,.2)"
        }, time)
    }
} 

// next level function. same as startGame
function nextLevel() {
    var generateMove = [];
    for (let i = 0; i < colors.length; i++) {
        generateMove.push(colors[Math.floor(Math.random() * colors.length)])
    }
    cpuMoves = generateMove
    console.log(cpuMoves)
}
//array to store user clicks. 
let userClicks = [];
//function to generate light
function lightUp(e) {
    e.target.classList.add('playing')
}
// function brightLight(e) {
//     e.target.classList.add('pulse')
// }
// function dim(e) {
//     e.target.classList.remove('dim')
// }
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
