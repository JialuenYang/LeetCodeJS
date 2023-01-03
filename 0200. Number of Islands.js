/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	const bfs = (x, y) => {
		if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1) {
			return;
		}
		if (grid[x][y] == 1) {
			grid[x][y] = 0;
			bfs(x - 1, y);
			bfs(x + 1, y);
			bfs(x, y + 1);
			bfs(x, y - 1);
		}
	};

	let islands = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				islands++;
				bfs(i, j);
			}
		}
	}
	return islands;
};
