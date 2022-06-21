/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
	const rowMin = [];
	const colMax = [];
	for (let i = 0; i < matrix.length; i++) {
		let min = 10 ** 5;
		for (let j = 0; j < matrix[0].length; j++) {
			min = Math.min(min, matrix[i][j]);
		}
		rowMin.push(min);
	}
	for (let i = 0; i < matrix[0].length; i++) {
		let max = 1;
		for (let j = 0; j < matrix.length; j++) {
			max = Math.max(max, matrix[j][i]);
		}
		colMax.push(max);
	}
	const output = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == rowMin[i] && matrix[i][j] == colMax[j]) {
				output.push(matrix[i][j]);
			}
		}
	}
	return output;
};
