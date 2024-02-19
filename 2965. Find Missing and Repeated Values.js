/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
	let repeat = 0;

	const set = new Set();
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			const num = grid[i][j];
			if (set.has(num)) {
				repeat = num;
			}
			set.add(num);
		}
	}

	let missing = 1;
	while (set.has(missing)) {
		missing++;
	}
	return [repeat, missing];
};
