/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
	/**
	 * Problem: I can't prove that flipping first column will have any different results than flipping each row to make first column all 1's.
	 * Time complexity: O(m * n)
	 * Space complexity: O(1)
	 *
	 * Process:
	 * 1. Since this is binary representation, we want the leftmost column to be all 1's. We do it by flipping rows.
	 * 2. For each column after first column, flip the column if the count of 1's is less than half the number of rows.
	 */
	const m = grid.length;
	const n = grid[0].length;
	const halfM = m / 2;

	for (let i = 0; i < m; i++) {
		if (grid[i][0] == 0) {
			for (let j = 0; j < n; j++) {
				grid[i][j] = grid[i][j] ? 0 : 1;
			}
		}
	}

	let output = 0;

	for (let j = 0; j < n; j++) {
		let count = 0;
		for (let i = 0; i < m; i++) {
			count += grid[i][j];
		}

		if (count < halfM) {
			count = m - count;
		}

		output += count * 2 ** (n - 1 - j);
	}

	return output;
};
