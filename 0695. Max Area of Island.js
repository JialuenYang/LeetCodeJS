/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	// Loop through the 2D array to find any 1, then use recursion to find the area of that land.
	let output = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == 1) {
				const landArea = recursion(grid, i, j);
				if (landArea > output) {
					output = landArea;
				}
			}
		}
	}
	return output;
};

var recursion = function (grid, x, y) {
	// Mark the current coordinates as visited
	grid[x][y] = 0;
	let left = 0;
	let right = 0;
	let up = 0;
	let down = 0;
	if (x != 0 && grid[x - 1][y] == 1) {
		left = recursion(grid, x - 1, y);
	}
	if (x != grid.length - 1 && grid[x + 1][y] == 1) {
		right = recursion(grid, x + 1, y);
	}
	if (y != 0 && grid[x][y - 1] == 1) {
		up = recursion(grid, x, y - 1);
	}
	if (y != grid[x].length - 1 && grid[x][y + 1] == 1) {
		down = recursion(grid, x, y + 1);
	}
	return 1 + left + right + up + down;
};
