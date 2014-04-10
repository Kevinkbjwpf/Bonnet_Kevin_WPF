//Kevin 04/10/2014 Expressions

var width = prompt("add a value");
var ratio = prompt(""); 
var rim = prompt("");
if (width != "" && ratio != "" && rim != "")
var area = ratio/100 * width * 2/25.4 + rim + rim; //calculating the input info 
console.log(area); //printing it out to console.
var result = "The size of your tires is" + area + " inches "; //result of the problem will show up here.
alert(result);