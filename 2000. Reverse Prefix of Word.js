/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	// If ch isn't in word, return the word.
	const index = word.indexOf(ch);
	if (index < 0) {
		return word;
	}

	// Reverse the first substring, then concat the rest of the original word.
	return (
		word
			.substring(0, index + 1)
			.split("")
			.reverse()
			.join("") + word.substring(index + 1, word.length)
	);
};
