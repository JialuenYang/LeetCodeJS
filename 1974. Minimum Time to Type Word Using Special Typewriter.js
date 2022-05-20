/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
	// Use ASCII to track the number of moves needed. If it's greater than half the alphabet count, we know we could have gone the other direction.
	let output = 0;
	let pointer = "a".charCodeAt(0);
	for (const c of word) {
		// Move pointer
		const count = Math.abs(c.charCodeAt(0) - pointer);
		output += count > 13 ? 26 - count : count;
		pointer = c.charCodeAt(0);
		// Type letter
		output++;
	}
	return output;
};
