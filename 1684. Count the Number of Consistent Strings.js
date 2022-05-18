/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let output = 0;

	const set = new Set();
	for (const letter of allowed) {
		set.add(letter);
	}

	for (const word of words) {
		let consistent = true;
		for (const letter of word) {
			if (!set.has(letter)) {
				consistent = false;
				break;
			}
		}
		if (consistent) {
			output++;
		}
	}

	return output;
};
