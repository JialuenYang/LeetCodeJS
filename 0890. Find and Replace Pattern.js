/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
	/**
	 * Time complexity: O(words.length * word.length)
	 * Space complexity: O(word.length)
	 *
	 * Another way to do it is by checking the mapping of each word directly to pattern.
	 */
	const getNewWord = (word) => {
		const map = new Map();
		const newWord = [];
		for (let i = 0; i < word.length; i++) {
			if (!map.has(word[i])) {
				map.set(word[i], map.size);
			}
			newWord.push(String.fromCharCode(map.get(word[i]) + "a".charCodeAt(0)));
		}
		return newWord.join("");
	};

	pattern = getNewWord(pattern);
	return words.filter((word) => getNewWord(word) === pattern);
};
