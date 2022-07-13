/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
	const output = [];
	for (let i = 0; i < grid[0].length; i++) {
		output.push(locateBall(grid, i));
	}
	return output;
};

const locateBall = (grid, col) => {
	const c = [0, col];
	while (1) {
		if (c[0] == grid.length) {
			return c[1];
		}
		if (grid[c[0]][c[1]] == 1) {
			if (c[1] == grid[0].length - 1 || grid[c[0]][c[1] + 1] == -1) {
				return -1;
			}
			c[0] = c[0] + 1;
			c[1] = c[1] + 1;
		} else {
			if (c[1] == 0 || grid[c[0]][c[1] - 1] == 1) {
				return -1;
			}
			c[0] = c[0] + 1;
			c[1] = c[1] - 1;
		}
	}
};
