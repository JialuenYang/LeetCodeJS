/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
	// BFS to determine connected land
	const bfs = (island, x, y) => {
		if (x < 0 || x > grid2.length - 1 || y < 0 || y > grid2[0].length - 1) {
			return;
		}
		if (grid2[x][y] == 1) {
			grid2[x][y] = 0;
			island.push([x, y]);
			bfs(island, x - 1, y);
			bfs(island, x + 1, y);
			bfs(island, x, y - 1);
			bfs(island, x, y + 1);
		}
	};

	// Loop through grid2 to find unvisited land
	const islands = [];
	for (let i = 0; i < grid2.length; i++) {
		for (let j = 0; j < grid2[0].length; j++) {
			if (grid2[i][j] == 1) {
				const island = [];
				bfs(island, i, j);
				islands.push(island);
			}
		}
	}

	// Loop through islands to check if correponding coordinates in grid1 also has land
	let answer = 0;
	for (const island of islands) {
		let isSubIsland = true;
		for (const [x, y] of island) {
			if (grid1[x][y] == 0) {
				isSubIsland = false;
				break;
			}
		}
		if (isSubIsland) {
			answer++;
		}
	}

	return answer;
};
