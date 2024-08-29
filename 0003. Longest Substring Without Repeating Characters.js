/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// Use Sliding Window method to solve this. Move left and right pointers while keeping track of all the possible chars and their last location in a map.

	let maxLen = 0;
	const prevIndices = new Map();
	let lastValidIndex = -1;

	for (let i = 0; i < s.length; i++) {
		if (prevIndices.has(s[i])) {
			lastValidIndex = Math.max(lastValidIndex, prevIndices.get(s[i]));
		}
		maxLen = Math.max(maxLen, i - lastValidIndex);
		prevIndices.set(s[i], i);
	}

	return maxLen;
};
