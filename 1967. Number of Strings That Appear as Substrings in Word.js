/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
	// includes() takes care of the heavy lifting here
	let count = 0;
	patterns.forEach((pattern) => {
		if (word.includes(pattern)) {
			count++;
		}
	});
	return count;
};
