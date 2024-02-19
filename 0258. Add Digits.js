/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	// Math problem.
	if (num == 0) {
		return 0;
	}
	const remainder = num % 9;
	return remainder == 0 ? 9 : remainder;
};
