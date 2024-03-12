/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	// Dynamic programming 2D grid of text1.length+1 rows and text2.length+1 columns
	// Final row and column are filled with zeroes
	const dp = [...Array(text1.length + 1)].map((_) =>
		Array(text2.length + 1).fill(0)
	);

	// Loop through the 2D grid from bottom right to left to up
	for (let i = text1.length - 1; i >= 0; i--) {
		for (let j = text2.length - 1; j >= 0; j--) {
			// If the current letters are the same, then right diagonal down + 1
			if (text1[i] === text2[j]) {
				dp[i][j] = dp[i + 1][j + 1] + 1;
			} else {
				// If current letters are different, then take the max of right or down
				dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
			}
		}
	}

	return dp[0][0];
};
