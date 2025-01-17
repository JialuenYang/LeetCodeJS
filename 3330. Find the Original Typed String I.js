/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
	// Just need to count how many consecutive same letters there are.
	let output = 1;
	for (let i = 0; i < word.length - 1; i++) {
		if (word[i] === word[i + 1]) {
			output += 1;
		}
	}
	return output;
};
