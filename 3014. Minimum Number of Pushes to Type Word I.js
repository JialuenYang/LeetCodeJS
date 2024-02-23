/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
	// Constraints makes this possible. No need to count frequency of letters.
	let pushes = 1;
	let count = 0;
	let i = 0;
	while (i < word.length) {
		count += pushes;
		if ((i + 1) % 8 == 0) {
			pushes++;
		}
		i++;
	}
	return count;
};
