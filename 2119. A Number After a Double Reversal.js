/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
	// If the number is less 0 to 9, then it can be reversed.
	// If the number has zero in the single digit, then it can't be reversed.
	return num < 10 || num % 10 != 0;
};
