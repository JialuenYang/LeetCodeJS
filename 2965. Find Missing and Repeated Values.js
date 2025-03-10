/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
	/**
	 * Use negative numbers to keep track of which indices we've covered.
	 * Alternatively, use math to calculate the repeated and missing values with total sum.
	 * Both methods use O(1) space.
	 * Time complexity: O(n^2)
	 * Space complexity: O(1)
	 */
	const n = grid.length;
	const ans = [0, 0];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const index = Math.abs(grid[i][j]) - 1;
			const newI = Math.floor(index / n);
			const newJ = index - newI * n;
			if (grid[newI][newJ] < 0) {
				ans[0] = index + 1;
			}
			grid[newI][newJ] = -Math.abs(grid[newI][newJ]);
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] > 0) {
				ans[1] = i * n + j + 1;
				return ans;
			}
		}
	}
};
