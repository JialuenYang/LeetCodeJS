/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	// If the two strings have different length, they can't be anagrams.
	if (s.length != t.length) {
		return false;
	}

	// We'll fill the arrays with the count of letters
	const sArr = new Array(26).fill(0);
	const tArr = new Array(26).fill(0);

	// In case we forget that the letter 'a' is ASCII code 97, we can just get it this way.
	const aASCII = "a".charCodeAt(0);

	for (let i = 0; i < s.length; i++) {
		// Use the ASCII code to deetermine the index of the array.
		sArr[s.charCodeAt(i) - aASCII]++;
		tArr[t.charCodeAt(i) - aASCII]++;
	}

	// If the count of letters for each string are not the same, then they are not anagrams.
	for (let i = 0; i < 26; i++) {
		if (sArr[i] != tArr[i]) {
			return false;
		}
	}
	return true;
};
