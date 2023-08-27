/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
	const output = [];
	for (const word of words) {
		const arr = word.split(separator);
		for (const a of arr) {
			if (a !== "") {
				output.push(a);
			}
		}
	}
	return output;
};
