/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
	// I tried to save more space by reusing the same array of 26 integers. Probably not needed at all.
	const alphabets = new Array(26).fill(0);
	const a = "a".charCodeAt(0);
	const A = "A".charCodeAt(0);
	for (const c of s) {
		if (c.toLowerCase() === c) {
			alphabets[c.charCodeAt(0) - a] = -1;
		}
	}
	for (const c of s) {
		if (c.toUpperCase() === c) {
			alphabets[c.charCodeAt(0) - A] = Math.abs(alphabets[c.charCodeAt(0) - A]);
		}
	}
	let index = 25;
	while (index >= 0) {
		if (alphabets[index] > 0) {
			return String.fromCharCode(index + A);
		}
		index--;
	}
	return "";
};
