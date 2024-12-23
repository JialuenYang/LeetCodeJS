/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	// The key is realizing that you just need to do Transpose and then swap columns to rotate 90 degrees.

	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[0].length; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length / 2; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[i][matrix.length - 1 - j];
			matrix[i][matrix.length - 1 - j] = temp;
		}
	}
};
