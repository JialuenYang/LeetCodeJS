/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
	// Track alphabet count in an array
	// Can also use a map.
	const alphabets = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	for (const c of s) {
		alphabets[c.charCodeAt(0) - aASCII]++;
	}

	// Filter the array for used alphabets and check if they have the same count
	const filtered = alphabets.filter((a) => a > 0);
	for (let i = 0; i < filtered.length - 1; i++) {
		if (filtered[i] != filtered[i + 1]) {
			return false;
		}
	}
	return true;
};
