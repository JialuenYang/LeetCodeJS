/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
	/**
	 * Convert the slashes into land coordinates. This becomes the find number of islands problem.
	 * Must use 3 x 3 for each / or \. 2 x 2 isn't enough because it will block off some islands when they should be connected.
	 * Once the land has been made, just use DFS to find all islands.
	 * Time complexity: O(n^2)
	 * Space complexity: O(n^2)
	 */
	const land = new Array(grid.length * 3)
		.fill()
		.map(() => new Array(grid.length * 3).fill(true));
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			switch (grid[i][j]) {
				case "/":
					land[i * 3][j * 3 + 2] = false;
					land[i * 3 + 1][j * 3 + 1] = false;
					land[i * 3 + 2][j * 3] = false;
					break;
				case "\\":
					land[i * 3][j * 3] = false;
					land[i * 3 + 1][j * 3 + 1] = false;
					land[i * 3 + 2][j * 3 + 2] = false;
					break;
			}
		}
	}

	const dfs = (x, y) => {
		if (x < 0 || land.length <= x || y < 0 || land.length <= y) {
			return;
		}

		if (land[x][y]) {
			land[x][y] = false;
			dfs(x - 1, y);
			dfs(x, y - 1);
			dfs(x + 1, y);
			dfs(x, y + 1);
		}
	};

	let islands = 0;
	for (let i = 0; i < land.length; i++) {
		for (let j = 0; j < land.length; j++) {
			if (land[i][j]) {
				islands++;
				dfs(i, j);
			}
		}
	}

	return islands;
};
