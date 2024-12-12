/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let rotten = [];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 2) {
				rotten.push([i, j]);
			}
		}
	}
	const dir = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];
	let minutes = 0;
	while (rotten.length > 0) {
		const newRotten = [];
		for (const [i, j] of rotten) {
			for (const [x, y] of dir) {
				const newI = i + x;
				const newJ = j + y;
				if (
					newI < 0 ||
					grid.length <= newI ||
					newJ < 0 ||
					grid[0].length <= newJ
				) {
					continue;
				}
				if (grid[newI][newJ] == 1) {
					grid[newI][newJ] = 2;
					newRotten.push([newI, newJ]);
				}
			}
		}
		rotten = newRotten;
		// Only add time if there are more good oranges to rot.
		if (rotten.length > 0) minutes++;
	}

	// Check for any good orange left
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				return -1;
			}
		}
	}
	return minutes;
};
