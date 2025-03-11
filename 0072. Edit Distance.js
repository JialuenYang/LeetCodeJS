/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	/**
	 * Time complexity: O(n*m)
	 * Space complexity: O(min(n, m)) if language allows swapping string pointers, otherwise O(n+m)
	 */
	// Make sure word2 is the shorter string.
	if (word1.length < word2.length) {
		[word2, word1] = [word1, word2]; // Unfortunately, JavaScript can't swap references or pointers to strings. JS space complexity is O(n+m).
	}

	// Only need to keep track of 2 rows of DP
	const dp = new Array(2).fill().map(() => new Array(word2.length + 1));

	// Initialize the final row of DP
	for (let j = 0; j <= word2.length; j++) {
		dp[0][j] = word2.length - j;
	}

	for (let i = word1.length - 1; i >= 0; i--) {
		// Copy row 0 to row 1.
		for (let j = 0; j < dp[0].length; j++) {
			dp[1][j] = dp[0][j];
		}
		// Initialize the rightmost DP value
		dp[0][word2.length] = dp[1][word2.length] + 1;

		for (let j = word2.length - 1; j >= 0; j--) {
			if (word1[i] === word2[j]) {
				dp[0][j] = dp[1][j + 1];
			} else {
				dp[0][j] = Math.min(dp[1][j], dp[0][j + 1], dp[1][j + 1]) + 1;
			}
		}
	}

	return dp[0][0];
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	/**
	 * NeetCode: https://www.youtube.com/watch?v=XYi2-LPrwm4
	 * Dynamic programming problem
	 * Time complexity: O(n*m)
	 * Space complexity: O(n*m)
	 */
	const dp = new Array(word1.length + 1)
		.fill()
		.map(() => new Array(word2.length + 1));

	// Initialize rightmost column of DP
	for (let i = 0; i <= word1.length; i++) {
		dp[i][word2.length] = word1.length - i;
	}
	// Initialize bottom row of DP
	for (let j = 0; j <= word2.length; j++) {
		dp[word1.length][j] = word2.length - j;
	}
	// Bottom up DP
	for (let i = word1.length - 1; i >= 0; i--) {
		for (let j = word2.length - 1; j >= 0; j--) {
			if (word1[i] === word2[j]) {
				dp[i][j] = dp[i + 1][j + 1];
			} else {
				dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]) + 1;
			}
		}
	}
	return dp[0][0];
};
