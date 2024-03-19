/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const rowSet = new Set();
	const colSet = new Set();
	const m = matrix.length;
	const n = matrix[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] == 0) {
				rowSet.add(i);
				colSet.add(j);
			}
		}
	}

	const rowArr = [...rowSet.values()];
	const colArr = [...colSet.values()];
	for (const row of rowArr) {
		for (let j = 0; j < n; j++) {
			matrix[row][j] = 0;
		}
	}

	for (const col of colArr) {
		for (let i = 0; i < m; i++) {
			matrix[i][col] = 0;
		}
	}
};
