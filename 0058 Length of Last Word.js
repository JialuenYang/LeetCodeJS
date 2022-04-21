/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	// Skip through empty spaces if there are any
	let index = s.length - 1;
	while (s.charAt(index) === " ") {
		index--;
	}
	// Count the non-empty spaces
	let count = 0;
	while (s.charAt(index) !== " " && index >= 0) {
		index--;
		count++;
	}
	return count;
};
