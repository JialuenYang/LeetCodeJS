/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
	const getLen = (num) => {
		let count = 0;
		if (num < 0) {
			count++;
			num = Math.abs(num);
		}
		while (num > 9) {
			num = Math.floor(num / 10);
			count++;
		}
		count++;
		return count;
	};

	const output = [];
	for (let j = 0; j < grid[0].length; j++) {
		let min = Infinity;
		let max = -Infinity;
		for (let i = 0; i < grid.length; i++) {
			min = Math.min(min, grid[i][j]);
			max = Math.max(max, grid[i][j]);
		}
		output.push(Math.max(getLen(min), getLen(max)));
	}

	return output;
};
