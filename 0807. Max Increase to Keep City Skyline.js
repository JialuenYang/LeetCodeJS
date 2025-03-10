/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
	/**
	 * Time complexity: O(m * n)
	 * Space complexity: O(m + n)
	 */
	const maxOfRows = new Array(grid.length).fill(0);
	const maxOfCols = new Array(grid[0].length).fill(0);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			maxOfRows[i] = Math.max(maxOfRows[i], grid[i][j]);
			maxOfCols[j] = Math.max(maxOfCols[j], grid[i][j]);
		}
	}

	let output = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			output += Math.min(maxOfRows[i], maxOfCols[j]) - grid[i][j];
		}
	}
	return output;
};
