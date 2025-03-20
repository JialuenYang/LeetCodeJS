/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
	/**
	 * Use prefix sum
	 * Time complexity: O(n + m)
	 * Space complexity: O(n + m) if including output
	 */
	const vowels = new Set(["a", "e", "i", "o", "u"]);

	const prefixSum = new Array(words.length).fill(0);
	let prevSum = 0;
	for (let i = 0; i < prefixSum.length; i++) {
		if (vowels.has(words[i][0]) && vowels.has(words[i].at(-1))) {
			prefixSum[i] = prevSum + 1;
			prevSum = prefixSum[i];
		} else {
			prefixSum[i] = prevSum;
		}
	}

	// Need to do q[0] - 1 because range is inclusive.
	return queries.map((q) => prefixSum[q[1]] - (prefixSum[q[0] - 1] || 0));
};
