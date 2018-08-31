var countdownGenerator = function(x) {
	var count = x


return function() {

	if (count > 0) {
			count--

		return "T-minus " + (count + 1 + "...")
			

	} if (count === 0){
			count--
		return "Blast Off!"


	} if (count < 0) {
			count--
		return "Rockets already gone, bub!"

	}


}

};

var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown());  // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown());  // Rockets already gone, bub!
console.log(countdown());  // Rockets already gone, bub!



