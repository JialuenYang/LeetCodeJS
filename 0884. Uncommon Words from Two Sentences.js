/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
	// Keep track of word occurences with 2 maps
	const map1 = new Map();
	const map2 = new Map();
	const words1 = s1.split(" ");
	const words2 = s2.split(" ");
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
	// Filter through the maps
	const output = [];
	for (const [key, val] of map1) {
		if (val == 1 && !map2.has(key)) {
			output.push(key);
		}
	}
	for (const [key, val] of map2) {
		if (val == 1 && !map1.has(key)) {
			output.push(key);
		}
	}
	return output;
};
