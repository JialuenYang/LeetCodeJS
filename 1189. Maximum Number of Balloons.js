/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
	// Use an array to count letters
	const alphabets = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	const b = "b".charCodeAt(0) - aASCII;
	const l = "l".charCodeAt(0) - aASCII;
	const o = "o".charCodeAt(0) - aASCII;
	const n = "n".charCodeAt(0) - aASCII;
	for (const c of text) {
		alphabets[c.charCodeAt(0) - aASCII]++;
	}
	// Both L and O are used twice
	return Math.min(
		alphabets[b],
		alphabets[0],
		Math.floor(alphabets[l] / 2),
		Math.floor(alphabets[o] / 2),
		alphabets[n]
	);
};
