/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
	/**
	 * Use DFS to find all water cells, add up the fish, and set the cells to 0.
	 * Time complexity: O(n * m) where n = grid.length, m = grid[0].length
	 * Space complexity: O(n * m) if counting stack frame or if input cannot be modified
	 */
	const dfs = (r, c) => {
		if (
			r < 0 ||
			grid.length <= r ||
			c < 0 ||
			grid[0].length <= c ||
			grid[r][c] == 0
		) {
			return 0;
		}
		const fish = grid[r][c];
		grid[r][c] = 0;
		return fish + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
	};

	let maxFish = 0;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] > 0) {
				maxFish = Math.max(maxFish, dfs(r, c));
			}
		}
	}
	return maxFish;
};
