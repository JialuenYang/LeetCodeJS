/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
	/**
	 * Time complexity: O(indices.length)
	 * Space complexity: O(m + n)
	 *
	 * Steps:
	 * 1. If a row is incremented twice, then it's back to even or 0. So find the rows and cols that only increment odd times.
	 * 2. We can calculate the total number of odd cells using some math.
	 */
	const rows = new Array(m).fill(false);
	const cols = new Array(n).fill(false);
	let rowsCount = 0;
	let colsCount = 0;
	for (const [r, c] of indices) {
		rows[r] = !rows[r];
		cols[c] = !cols[c];

		rowsCount += rows[r] ? 1 : -1;
		colsCount += cols[c] ? 1 : -1;
	}

	/**
	 * Number of rows that are incremented * number of columns that are not incremented
	 * +
	 * Number of rows that are NOT incremented * number of columns that are incremented
	 */
	return rowsCount * (n - colsCount) + (m - rowsCount) * colsCount;
};
