/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	// Simply add the chars to a set and check if the set size is 26.
	const alphabets = new Set();
	for (const char of sentence) {
		alphabets.add(char);
		if (alphabets.size == 26) {
			return true;
		}
	}
	return false;
};
