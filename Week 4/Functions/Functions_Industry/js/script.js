//JavaScript Functions Industry 05/01/2014

//creating a Function that represent movie ticket prices

var movieTicketPrices = ["age" , "time"];

//Functions that will hold the number for ticket prices
var totalNumPrices = 0;

console.log(movieTicketPrices);
console.log(movieTicketPrices[1]);

totalNumPrices=chechForPrices(movieTicketPrices);

console.log("There are "+totalNumPrices+" different prices(s) for movie tickets");

//creating a functions to cycle through the array and counts the movie ticket prices.

function checkForPrices(movieTickets){
	
	console.log(movieTickets[2]);
	
	//create a varibale to count the tickets
	var numTickets = 0;
	
	//check each item in the array to see if it is a ticket
	
	for(var i=0; i<movieTicketPrices.length; i++ )
{ 
//console.log(movieTicketPrices[i]); 
//test the movie tickets prices
if(movieTicketPrices[i] === "prices" ){
	
	numTickets++;
}
	
	console.log(numTickets);
	return(numTickets);
}