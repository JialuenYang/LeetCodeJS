/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	// Many number of approaches. This one is simpler for my brain.
	const merged = [];
	const length = Math.min(word1.length, word2.length);
	for (let i = 0; i < length; i++) {
		merged.push(word1[i]);
		merged.push(word2[i]);
	}
	if (word1.length > length) {
		merged.push(word1.substring(length, word1.length));
	} else if (word2.length > length) {
		merged.push(word2.substring(length, word2.length));
	}
	return merged.join("");
};
