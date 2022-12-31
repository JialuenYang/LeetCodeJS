/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
	let count = 0;
	for (const c of s) {
		if (c === letter) {
			count++;
		}
	}
	// Rounded down to nearest whole number so use Math.floor
	return Math.floor((100 * count) / s.length);
};
