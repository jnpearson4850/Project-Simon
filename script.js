// // all posiiable var's

var level = document.querySelector('.level')
var rings = document.querySelector('.rings')
var green = document.querySelector('#circle1')
var red = document.querySelector('#circle2')
var blue = document.querySelector('#circle3')
var orange = document.querySelector('#circle4')
var purple = document.querySelector('#circle5')
var start = document.querySelector('#start')
var reset = document.querySelector('#reset')
//event listners

reset.addEventListener('click', function() {
    location.reload('Start Over')})
 circle5.addEventListener('click', function() {
    console.log('purple')})
 circle4.addEventListener('click', function() {
    console.log('orange')})
 circle3.addEventListener('click', function() {
    console.log('blue')})
 circle2.addEventListener('click', function() {
    console.log('red')})
 circle1.addEventListener('click', function() {
     console.log('green')})

//  start game functoin. rigth now console.logs the click
// and generates a random sequence of colors. 

var generateMove = []
let colors = ["green", "red", "blue", "orange", "purple"];
function startGame () {
for ( i = 0; i < colors.length; i++) {
    console.log (generateMove.push(colors[Math.floor(Math.random() * colors.length)])
)}
}
// //compare user click to game pattern
// belive this will register the events
// but need to compare the array above to this


function playerClick() {
rings.addEventListener('click', function (evt) {
    if(!event.target.matches('.click-me')) return
    event.preventDefault();
    console.log('event clicked');
},false)}














//color animations









