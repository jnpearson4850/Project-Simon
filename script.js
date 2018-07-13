// // all posiiable var's
// also need help linking the users clicked events to the console. and compare them to each other
//those to things and ill be done

var level = document.querySelector('.level')
var rings = document.querySelector('.rings')
var green = document.querySelector('#circle1')
var red = document.querySelector('#circle2')
var blue = document.querySelector('#circle3')
var orange = document.querySelector('#circle4')
var purple = document.querySelector('#circle5')
var start = document.querySelector('#start')
var reset = document.querySelector('#reset')

//event listener
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

// start game functoin. rigth now console.logs the click
// and generates a random sequence of colors. 
// added con.log and now numbers populate in the console


// function userButtonClick() { 
//     var source = ();
//     if (source.id === "circle1"){
//         console.log ("Green button clicked")
//         userResponse.push (source.id);
//     }
//     else if (source.id === "circle2") {
//         console.log("Red button clicked")
//         userResponse.push (source.id);
//     }
//     else if (source.id === "circle3"){
//         console.log("Blue button clicked")
//         userResponse.push (source.id);
//     }
//     else if (source.id === "circle4") {
//         console.log("Orange Button Clicked")
//         userResponse.push (source.id);
//     }
//     else if (source.id === "circle5") {
//         console.log("Purple button clicked")
//         userResponse.push (source.id);
//     }
// }
// generate move
var generateMove = []
let colors = ["green", "red", "blue", "orange", "purple"];
function startGame () {

    for (let i = 0; i < colors.length; i++) {
    generateMove.push(colors[Math.floor(Math.random() * colors.length)]
)}
console.log(generateMove)
}



// var circles = ["green", "red", "blue", "orange", "purple"];
// var circlesInPlay = []
// //check click match


// var checkForMatch = function() {
// 	if (circlesInPlay.length === generateMove) {
// 		result = alert ("You found a match!");
// 	} else if (cardsInPlay.length !== generateMove) {
// 			result = alert ("Sorry, try again.");
// 		}
// 	};




// //chek circle 5
// function checkPlayer () {
//     if (generateMove[] === 'colors') {
//         result = alert ('good job')
//     }
//     else if (generateMove[] === 'colors'){
//         result = alert ('right again')
//     }
//     else if (generateMove[] === 'colors'){
//         result = alert ('keep giong')
//     }
//     else if (generateMove[]=== 'colors'){
//         result = alert ('almost there')
//     }
//     else if (generateMove [] === 'colors'){
//         reset = alert ('great job')
//     }
// }
//     // var circleId = this.getAttribute('data-id');

// 	// console.log("you picked " + circles[circleId]);
// 	// circlesInPlay.push(circles[circleId]);

// 	// console.log(circles[circleId]);
// 	// console.log(circles[circleId]);
// 	// this.setAttribute('src', circles[circleId]);
// 	// checkForMatch();
	






// // //compare user click to game pattern
// // belive this will register the events
// // but need to compare the array above to this
// // function playerClick() {
// // rings.addEventListener('click', function (evt) {
// //     if(!event.target.matches('.click-me')) return
// //     event.preventDefault();
// //     console.log('event clicked');
// // },false)}














//color animations









