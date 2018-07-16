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

//event listener for buttons
reset.addEventListener('click', function() {
    location.reload('Start Over')})
//  rings.addEventListener ('click', userButtonClick())
 purple.addEventListener('click', function () {
     console.log("clicked purple")
 })
 orange.addEventListener('click', function() {
     console.log('clicked orange')
 })
 blue.addEventListener('click', function() {
     console.log('clicked blue')
 })
 red.addEventListener('click', function() {
     console.log('clicked red')
 })
 green.addEventListener('click', function() {
     console.log('clicked green')
 })

 // event listners for start button to  generate random order of colors
 let colors = ["green", "red", "blue", "orange", "purple"];
 function startGame () {
    var generateMove = []
     for (let i = 0; i < colors.length; i++) {
     generateMove.push(colors[Math.floor(Math.random() * colors.length)]
 )}
 console.log(generateMove)
 }








	





























