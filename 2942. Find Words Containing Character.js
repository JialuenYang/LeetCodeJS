/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
	const indices = [];

	for (let i = 0; i < words.length; i++) {
		for (const c of words[i]) {
			if (c === x) {
				indices.push(i);
				break;
			}
		}
	}
	return indices;
};
