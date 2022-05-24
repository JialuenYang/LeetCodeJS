/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	let output = 0;
	let currentHighest = 0;
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			currentHighest++;
			output = Math.max(output, currentHighest);
		} else {
			currentHighest = 0;
		}
	}
	// Remember to add one in the end because output counts only 1 when 2 chars are equal
	return output + 1;
};
