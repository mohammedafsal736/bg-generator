var _ = require('lodash');

var a=[1,2,3,4,5,6,7,8,9];

console.log('answer:', _.without(a,5));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bd");

function setGradient(){
	body.style.background=" linear-gradient(to right," + color1.value + "," + color2.value +")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input",setGradient);