/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
	// There's apparently a faster method that uses bit manipulation.
	let output = 0;
	while (num != 0) {
		num = num % 2 == 0 ? num / 2 : num - 1;
		output++;
	}
	return output;
};
