/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s
		.split(/\s+/)
		.filter((str) => str !== "")
		.reverse()
		.join(" ");
};
