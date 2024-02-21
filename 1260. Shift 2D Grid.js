/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
	// Make a vector out of the grid, shift the vector, then turn it back to a grid.

	let vector = [];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			vector.push(grid[i][j]);
		}
	}

	k = k % vector.length;
	vector = vector.slice(-k).concat(vector.slice(0, -k));

	const output = [];
	let i = 0;
	while (i < vector.length) {
		output.push(vector.slice(i, i + grid[0].length));
		i += grid[0].length;
	}

	return output;
};
