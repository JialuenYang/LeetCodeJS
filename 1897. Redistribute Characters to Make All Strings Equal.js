/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
	// This problem is just a complicated way of asking if there are enough letters to be divided evenly into each word.
	const map = new Map();
	for (const word of words) {
		for (const letter of word) {
			if (map.has(letter)) {
				map.set(letter, map.get(letter) + 1);
			} else {
				map.set(letter, 1);
			}
		}
	}

	for (const count of map.values()) {
		if (count % words.length != 0) {
			return false;
		}
	}
	return true;
};
