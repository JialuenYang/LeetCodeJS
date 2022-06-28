/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
	// The key is knowing the relationship of indices for diagonal, especially top right to bottom left diagnol.
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (i == j || i + j == grid.length - 1) {
				if (grid[i][j] == 0) {
					return false;
				}
			} else {
				if (grid[i][j] != 0) {
					return false;
				}
			}
		}
	}

	return true;
};
