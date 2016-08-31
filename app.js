//prompt input
//enter number, strings to integer
function fizzbuzz() {
	var max = parseInt(prompt("Please enter a number"))
	for (var i = max; i <= max; i++){
		if (i % 15 === 0) {
			console.log("fizzbuzz")
		}
		else if (i % 3 === 0) {
			console.log("fizz")
		}
		else if (i % 5 === 0) {
			console.log("buzz")
		}
		else {
			console.log(i)
		}
	}
}


//append results
fizzbuzz()
