/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let i = 0;
	let j = matrix[0].length - 1;
	while (i < matrix.length && j >= 0) {
		if (target == matrix[i][j]) {
			return true;
		}

		if (target < matrix[i][j]) {
			j--;
		} else {
			i++;
		}
	}
	return false;
};
