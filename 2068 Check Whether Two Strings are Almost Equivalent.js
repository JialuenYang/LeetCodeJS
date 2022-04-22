/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
	// Use letter array to keep track of the count of each letter
	const arr1 = new Array(26).fill(0);
	const arr2 = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	for (const c of word1) {
		arr1[c.charCodeAt(0) - aASCII]++;
	}
	for (const c of word2) {
		arr2[c.charCodeAt(0) - aASCII]++;
	}
	// If the difference in count of letter is > 3, then return false
	for (let i = 0; i < 26; i++) {
		if (Math.abs(arr1[i] - arr2[i]) > 3) {
			return false;
		}
	}
	return true;
};
