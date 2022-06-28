/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	const set = new Set();
	for (let i = 0; i < words.length - 1; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i].length > words[j].length) {
				if (words[i].includes(words[j])) {
					set.add(words[j]);
				}
			} else {
				if (words[j].includes(words[i])) {
					set.add(words[i]);
				}
			}
		}
	}
	return [...set];
};
