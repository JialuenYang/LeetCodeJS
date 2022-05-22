/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	// Commented out code is the typical solution. The following is without using %
	const output = new Array(n);
	for (let i = 1; i <= n; i++) {
		output[i - 1] = i.toString();
	}
	for (let i = 3; i <= n; i += 3) {
		output[i - 1] = "Fizz";
	}
	for (let i = 5; i <= n; i += 5) {
		output[i - 1] = "Buzz";
	}
	for (let i = 15; i <= n; i += 15) {
		output[i - 1] = "FizzBuzz";
	}
	// for(let i = 1; i <= n; i++) {
	//     if (i % 3 == 0 & i % 5 == 0) {
	//         output[i-1] = "FizzBuzz";
	//     }
	//     else if (i % 3 == 0) {
	//         output[i-1] = "Fizz";
	//     }
	//     else if (i % 5 == 0) {
	//         output[i-1] = "Buzz";
	//     }
	//     else {
	//         output[i-1] = i.toString();
	//     }
	// }
	return output;
};
