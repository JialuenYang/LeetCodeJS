/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	// Simply split the string into an array of words and compare the length
	let output = 0;
	for (const sentence of sentences) {
		const wordCount = sentence.split(" ").length;
		if (wordCount > output) {
			output = wordCount;
		}
	}
	return output;
};
