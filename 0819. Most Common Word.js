/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
	const set = new Set(banned);
	const map = new Map();
	const words = paragraph.split(/[!?',;. ]/g);
	for (const word of words) {
		if (word.length > 0) {
			const lowercase = word.toLowerCase();
			if (!set.has(lowercase)) {
				if (map.has(lowercase)) {
					map.set(lowercase, map.get(lowercase) + 1);
				} else {
					map.set(lowercase, 1);
				}
			}
		}
	}

	let mostFreq = 0;
	let word = "";
	for (const [key, val] of map) {
		if (val > mostFreq) {
			mostFreq = val;
			word = key;
		}
	}

	return word;
};
