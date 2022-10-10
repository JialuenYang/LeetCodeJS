/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	// Use the same grid to keep track of all the least moves possible
	for (let j = grid[0].length - 1; j >= 0; j--) {
		for (let i = grid.length - 1; i >= 0; i--) {
			const rightVal = i + 1 < grid.length ? grid[i + 1][j] : null;
			const downVal = j + 1 < grid[0].length ? grid[i][j + 1] : null;
			if (rightVal !== null && downVal !== null) {
				grid[i][j] += Math.min(rightVal, downVal);
			} else if (rightVal !== null && downVal === null) {
				grid[i][j] += rightVal;
			} else if (rightVal === null && downVal !== null) {
				grid[i][j] += downVal;
			}
		}
	}
	return grid[0][0];
};
