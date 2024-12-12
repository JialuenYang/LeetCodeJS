/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
	// Start from beginWord and do letter replacement from left to right. Don't compare wordList words with each other because that's slower.
	const set = new Set(wordList);
	let words = [beginWord];
	let steps = 1;
	while (words.length > 0) {
		const newWords = [];
		for (const word of words) {
			if (word === endWord) {
				return steps;
			}

			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < 26; j++) {
					const newWord =
						word.slice(0, i) +
						String.fromCharCode(j + "a".charCodeAt(0)) +
						word.slice(i + 1);
					if (set.has(newWord)) {
						newWords.push(newWord);
						set.delete(newWord);
					}
				}
			}
		}

		words = newWords;
		steps++;
	}

	return 0;
};
