/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
	// 3 consecutive numbers = x - 1, x, x + 1. Add them all to get 3x
	return num % 3 != 0 ? [] : [num / 3 - 1, num / 3, num / 3 + 1];
};
