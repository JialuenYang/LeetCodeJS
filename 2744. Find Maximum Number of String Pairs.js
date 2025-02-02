/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
	let output = 0;
	const set = new Set();
	for (const word of words) {
		if (set.has(word.split("").reverse().join(""))) {
			output++;
		} else {
			set.add(word);
		}
	}
	return output;
};
