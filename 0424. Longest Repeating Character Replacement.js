/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	const map = new Map();
	let maxLen = 0;
	let charCount = 0;
	let l = 0;
	let r = 0;

	while (r < s.length) {
		// Move right pointer
		map.set(s[r], (map.get(s[r]) || 0) + 1);

		// Get the highest count among chars.
		// No need to compare each char count because we only care about the highest one EVER due to this finding the longest repeating char replacement.
		charCount = Math.max(charCount, map.get(s[r]));
		r++;

		if (k >= r - l - charCount) {
			maxLen = Math.max(maxLen, r - l);
		} else {
			// Move left pointer
			map.set(s[l], map.get(s[l]) - 1);
			l++;
		}
	}
	return maxLen;
};
