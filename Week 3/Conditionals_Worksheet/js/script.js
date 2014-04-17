//Checking movie ticket prices

//create a variable that represent movie ticket prices

var movieTicketPrices = ["age" , "time"];

//varibale that will hold the number for ticket prices
var totalNumPrices = 0;

console.log(movieTicketPrices);
console.log(movieTicketPrices[1]);

//making a loop "ForLoop" : Basic Strcuture - for(declare variable for counting; Condition to test; what happens after the loop) [Code Inside Here]

//testing the items in the array by using the ForLoop

//now testing using the property of an array: /lenght  -give us the number of items inside of the array

for(var i=0; i<movieTicketPrices.length; i++ )
{ console.log("inside the for loop"); 

console.log(movieTicketPrices[i]);

//testing the different items in the array and getting the movie prices
//iF statements 
//iF(Thing to test) {CODE TO RUN IF TRUE}
   
    if(movieTicketPrices[1] ==="prices");{
	    console.log("item is a price");
	    //keeping count of the number of prices
	    totalNumPrices++;
    }
   }

     console.log("After the For Loop");