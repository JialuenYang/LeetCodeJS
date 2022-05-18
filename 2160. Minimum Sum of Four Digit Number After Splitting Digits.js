/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
	// The key thing to know is how to turn an integer into an array of integers.
	const arr = Array.from(num.toString())
		.map(Number)
		.sort((a, b) => a - b);
	return arr[0] * 10 + arr[1] * 10 + arr[2] + arr[3];
};
