/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
	// Know how to generate a string with repeating char using an array.
	return n % 2 == 1
		? new Array(n + 1).join("a")
		: new Array(n).join("a") + ["b"];
};
