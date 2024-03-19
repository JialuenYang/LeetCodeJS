/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	// Similar to Unique Paths, but just put 0 where there are obstacles in dp grid.
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;
	if (obstacleGrid[m - 1][n - 1] == 1) {
		return 0;
	}
	const dp = [...Array(m)].map((_) => new Array(n).fill(null));
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (obstacleGrid[i][j] == 1) {
				dp[i][j] = 0;
			}
		}
	}

	dp[m - 1][n - 1] = 1;

	for (let i = m - 2; i >= 0; i--) {
		if (dp[i][n - 1] == null) {
			dp[i][n - 1] = dp[i + 1][n - 1];
		}
	}

	for (let j = n - 2; j >= 0; j--) {
		if (dp[m - 1][j] == null) {
			dp[m - 1][j] = dp[m - 1][j + 1];
		}
	}

	for (let i = m - 2; i >= 0; i--) {
		for (let j = n - 2; j >= 0; j--) {
			if (dp[i][j] == null) {
				dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
			}
		}
	}

	return dp[0][0];
};
