//Kevin 04/10/2014 Expressions

var width = prompt("We are calculsting the area of a tire. \nPlease enter the width:"); //this number is asking the inner wall of the oersons tires.
var ratio = prompt("This number tells you the distance from the Rim to Tread \nEnter the Ratio:"); 
var rim = prompt("Please enter the Rim Size:"); //wheel and range between 9-28inches
var area = ((Number(ratio)/100) *Number( width) * 2)/25.4 + Number(rim);  //calculating the input info 
console.log(area); //printing it out to console.
var result = "The size of your tires is " + area + " inches "; //result of the problem will show up here.
alert(result);
