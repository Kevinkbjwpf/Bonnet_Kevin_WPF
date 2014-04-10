//Kevin 04/10/2014 Expressions

var width = prompt("add a value");
var ratio = prompt("a"); 
var rim = prompt("rim size");
var area = ((Number(ratio)/100) *Number( width) * 2)/25.4 + Number(rim);  //calculating the input info 
console.log(area); //printing it out to console.
var result = "The size of your tires is" + area + " inches "; //result of the problem will show up here.
alert(result);
