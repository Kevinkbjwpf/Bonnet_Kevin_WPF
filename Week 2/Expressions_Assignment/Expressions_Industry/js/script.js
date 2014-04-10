//Kevin 04/10/2014 Expressions

<!DOCTYPE html>
<html>

<body>

<script type="text/javascript">

var ratio = prompt("add a value");
var width = prompt("a"); 
var rim = prompt("rim size");
var area = ratio/100 * width * 2/25.4 + rim;  //calculating the input info 
console.log(area); //printing it out to console.
var result = "The size of your tires is" + area + " inches "; //result of the problem will show up here.
alert(result);

</body>

</html>