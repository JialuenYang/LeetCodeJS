/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
	// startsWith() takes care of everything here
	let count = 0;
	words.forEach((word) => {
		if (word.startsWith(pref)) {
			count++;
		}
	});
	return count;
};
