/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// Dynamic programming 2D grid. Add right and bottom.
	const dp = [...Array(m)].map((_) => new Array(n).fill(1));

	for (let i = m - 2; i >= 0; i--) {
		for (let j = n - 2; j >= 0; j--) {
			dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
		}
	}

	return dp[0][0];
};
