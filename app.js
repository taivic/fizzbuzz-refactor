
//prompt input
prompt("Please enter a number");

//enter number, strings to integer
function fizzbuzz() {
	var max = parseInt(prompt("Please enter a number"))
	return max;
	for (var i = max; i <200; i++){
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


//append results
fizzbuzz()

//math.floor()rid decimal;