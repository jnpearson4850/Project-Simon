// // all posiiable var's

var level = document.querySelector(".level")
var rings = document.querySelector(".rings")
var green = document.querySelector("#circle1")
var red = document.querySelector("#circle2")
var blue = document.querySelector("#circle3")
var orange = document.querySelector("#circle4")
var purple = document.querySelector("#circle5")
var start = document.querySelector("#start")
var reset = document.querySelector("#reset")

// //start game
// function startGame() {
//     resetGame();
// }

// function resetGame() {

// }

//random genarator of colors 
var randomArray = []
let colors = ["green", "red", "blue", "orange", "purple"];
for ( i = 0; i < colors.length; i++) {
randomArray.push(colors[Math.floor(Math.random() *  colors.length)]
)}

// var color = colors[Math.floor(Math.random()*colors.length)];
// 
// click events
start.addEventListener ('click', function() {
alert('Begin Game')})
reset.addEventListener('click',function() {
alert('Start Over')})
circle5.addEventListener('click', function() {
alert('you clicked purple')})
circle4.addEventListener('click', function() {
alert('you clicked orange')})
circle3.addEventListener('click', function() {
alert('you clicked blue')})
circle2.addEventListener('click', function() {
alert('you clicked red')})
circle1.addEventListener('click', function() {
 alert('you clicked green')})


// }
//color animations









