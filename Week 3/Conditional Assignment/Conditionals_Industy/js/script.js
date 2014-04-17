 //Kevin 04/17/2014 Conditionals Industry

//Old enough to watch a "Rated-R" movie//
//starting off with my prompts for this.


var name = prompt("Please type in your name"); //prompting the user to input there name first
var yearBorn = promt("What year were you born"); //getting the users birth year

console.log(name);
console.log()
//creating an alert that the user will see
alert("Welcome " +name+"! we have one more question for you.");

//now working on the conditional statement of proof for the prompts

var Age = 15;
var minAge = 17;
var wParentGuardianAge = 21; // the age of the parent/guardian of the present child

//if a person is old enough to be permitted in,"printing to console "you can watch this movie!"
//if the person is 17 and older 
if(Age > minAge){
	//code will take place if the conditions are true
	//you can watch the movie!
	console.log("You can watch this movie!");
}else if(Age > wParentGuardianAge ){
//you can watch the movie with a parent/guradian if present!
	console.log("You can watch this movie, but only with a parent/guradian present.");
}else{
	//sorry your just not old enough to watch this movie!
	console.log("Sorry your just not old enough to watch this movie!");
}