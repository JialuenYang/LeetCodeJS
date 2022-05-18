/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	// Do everything as an array first
	return s
		.split(" ")
		.map((word) => word.split("").reverse().join(""))
		.join(" ");
};
