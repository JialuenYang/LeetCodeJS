/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
	return n
		.toString(k)
		.split("")
		.map((char) => parseInt(char))
		.reduce((sum, b) => sum + b, 0);
};
