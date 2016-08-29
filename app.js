$(document).ready(function() {
//prompt input
	prompt("Please enter a number");

//enter number, strings to integer
	function fizzbuzz() {
		var i = parseInt(prompt("Please enter a number"));
		for (var i = 1; i <100; i++){
			if (i % 15 === 0) {
				console.log("fizzbuzz")
			}
			if (i % 3 === 0) {
				console.log("fizz")
			}
			if (i % 5 === 0) {
				console.log("buzz")
			}
			else {
				console.log(i)
			}
		}
	}

$(".results").append(
	
	)
//append results


});




//var max = parseInt(prompt('Enter a number:'));
//function startCounting {
	//	math.floor()rid decimal;