/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function (s) {
	/**
	 * Use dynamic programming.
	 * Time complexity: O(n^2)
	 * Space complexity: O(n)
	 */
	const dp = new Array(s.length + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 1; i < dp.length; i++) {
		const freq = new Map();
		let uniqueCount = 0;
		let maxFreq = 0;
		for (let j = i - 1; j >= 0; j--) {
			freq.set(s[j], (freq.get(s[j]) ?? 0) + 1);
			if (freq.get(s[j]) == 1) {
				uniqueCount++;
			}
			maxFreq = Math.max(maxFreq, freq.get(s[j]));
			if (i - j == uniqueCount * maxFreq) {
				dp[i] = Math.min(dp[i], dp[j] + 1);
			}
		}
	}

	return dp[dp.length - 1];
};
