/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
	/**
	 * The hard part is finding the next letter after reaching repeatLimit and then back and forth.
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	const freq = new Array(26).fill(0);
	for (const c of s) {
		freq[c.charCodeAt(0) - "a".charCodeAt(0)]++;
	}

	const output = [];
	for (let i = freq.length - 1; i >= 0; i--) {
		// For finding the next letter due to reaching repeatLimit
		let j = i - 1;

		while (freq[i] > 0) {
			let count = 0;
			while (freq[i] > 0 && count < repeatLimit) {
				output.push(String.fromCharCode("a".charCodeAt(0) + i));
				freq[i]--;
				count++;
			}

			// Must check freq[i] > 0 or else freq[j] gets counted in its repeatLimit
			if (count == repeatLimit && freq[i] > 0) {
				while (freq[j] == 0) {
					j--;
				}
				if (j < 0) {
					break;
				}
				output.push(String.fromCharCode("a".charCodeAt(0) + j));
				freq[j]--;
			}
		}
	}
	return output.join("");
};
