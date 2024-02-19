/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
	const m = matrix.length;
	const n = matrix[0].length;

	for (let j = 0; j < n; j++) {
		let max = -1;
		for (let i = 0; i < m; i++) {
			max = Math.max(matrix[i][j], max);
		}

		for (let i = 0; i < m; i++) {
			if (matrix[i][j] == -1) {
				matrix[i][j] = max;
			}
		}
	}

	return matrix;
};
