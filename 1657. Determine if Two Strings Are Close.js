/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
	// Check length
	if (word1.length != word2.length) {
		return false;
	}
	// Store frequency of letters
	const arr1 = new Array(26).fill(0);
	const arr2 = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	for (const c of word1) {
		arr1[c.charCodeAt(0) - aASCII]++;
	}
	for (const c of word2) {
		arr2[c.charCodeAt(0) - aASCII]++;
	}
	// Make sure letters exist in both word1 and word2
	for (let i = 0; i < arr1.length; i++) {
		if (!(arr1[i] == 0 && arr2[i] == 0) && !(arr1[i] > 0 && arr2[i] > 0)) {
			return false;
		}
	}
	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);
	// Check frequencies of letters
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] != arr2[i]) {
			return false;
		}
	}
	return true;
};
