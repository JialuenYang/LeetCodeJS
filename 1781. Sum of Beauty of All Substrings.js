/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
	/**
	 * Time complexity: O(n^2)
	 * Space complexity: O(1)
	 */
	let output = 0;

	for (let i = 0; i < s.length - 2; i++) {
		const freq = new Array(26).fill(0);
		for (let j = i; j < s.length; j++) {
			freq[s.charCodeAt(j) - "a".charCodeAt(0)]++;

			let nonZeroCount = 0;
			let min = Infinity;
			for (const f of freq) {
				if (f > 0) {
					nonZeroCount++;
					min = Math.min(min, f);
				}
			}
			if (nonZeroCount >= 2) {
				output += Math.max(...freq) - min;
			}
		}
	}

	return output;
};
