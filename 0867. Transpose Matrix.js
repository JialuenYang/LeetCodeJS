/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	const output = new Array(matrix[0].length)
		.fill(0)
		.map(() => new Array(matrix.length).fill(0));
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			output[j][i] = matrix[i][j];
		}
	}
	return output;
};
