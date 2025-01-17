/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
	let ops = 0;
	for (let j = 0; j < grid[0].length; j++) {
		for (let i = 1; i < grid.length; i++) {
			if (grid[i][j] <= grid[i - 1][j]) {
				ops += grid[i - 1][j] - grid[i][j] + 1;
				grid[i][j] = grid[i - 1][j] + 1;
			}
		}
	}

	return ops;
};
