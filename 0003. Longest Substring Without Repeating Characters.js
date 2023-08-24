/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// Use Sliding Window method to solve this. Move left and right pointers while keeping track of all the possible chars and their last location in a map.

	const map = new Map();
	let maxLength = 0;
	let left = 0;
	for (let right = 0; right < s.length; right++) {
		const c = s[right];
		if (map.get(c) >= left) {
			left = map.get(c) + 1;
		} else {
			maxLength = Math.max(maxLength, right - left + 1);
		}
		map.set(c, right);
	}

	return maxLength;
};
