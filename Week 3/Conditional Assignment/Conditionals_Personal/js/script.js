//Kevin 04/17/2014 Conditionals Personal

//age for drinking alcohol
//starting the prompt section for this section of work.

var name = prompt("Please type in your name"); //prompting the user to input there name first
console.log(name);

//creating an alert that the user will see
alert("Welcome " +name+"!");

var yearBorn = prompt("What year were you born?"); //getting the users birth yearBorn
console.log(yearBorn);

//variable for the current year
var currentYear = 2014

//finding out how old the drinkers are

var age = currentYear - yearBorn;
console.log(age);

alert(name+" you are "+age+" years old")

//now working on the conditional statement of proof 

var personAge = 19;
var minAge = 21

//if a person is old enough to be permitted in,"printing to console "you can drink alcohol!"
//if the person is 21 and older 
if(personAge > minAge){
	//code will take place if the conditions are true
	console.log("You can have a drink!");
}else{
//code will be perform if conditionals is false
	console.log("Sorry your just not old enough to have alcohol yet!");
}


