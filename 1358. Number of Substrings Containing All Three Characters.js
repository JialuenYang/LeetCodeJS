/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
	/**
	 * Sliding window
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let l = 0;
	let r = 0;
	const freq = new Array(3).fill(0);
	let total = 0;

	while (r < s.length) {
		freq[s.charCodeAt(r) - "a".charCodeAt(0)]++;

		while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {
			// Add the right side count. (Remember that l = 0 when running this for the first time)
			total += s.length - r;

			// Each time left pointer increments, this loops checks for frequencies and will add the right count in the above line of code
			freq[s.charCodeAt(l) - "a".charCodeAt(0)]--;
			l++;
		}
		r++;
	}

	return total;
};
