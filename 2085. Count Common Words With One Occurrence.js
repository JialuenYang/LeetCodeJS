/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
	// Use maps to keep track of word occurence
	const map1 = new Map();
	const map2 = new Map();
	for (const word of words1) {
		if (map1.has(word)) {
			map1.set(word, map1.get(word) + 1);
		} else {
			map1.set(word, 1);
		}
	}
	for (const word of words2) {
		if (map2.has(word)) {
			map2.set(word, map2.get(word) + 1);
		} else {
			map2.set(word, 1);
		}
	}
	let output = 0;
	for (const [key, val] of map1) {
		if (val == 1 && map2.get(key) == 1) {
			output++;
		}
	}
	return output;
};
