/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
	/**
	 * Key points:
	 * 1. All negative values can be grouped together.
	 * 2. If total number of negative values is even, then everything will be positive.
	 * 3. If total number of negative values is odd, then the value closest to zero (from both positive and negative sides) will be the only negative value.
	 * Time complexity: O(n * m)
	 * Space complexity: O(1)
	 */
	let negCount = 0;
	let biggestNeg = -Infinity;
	let absSum = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			absSum += Math.abs(matrix[i][j]);

			if (matrix[i][j] < 0) {
				negCount++;
			}

			if (-Math.abs(matrix[i][j]) > biggestNeg) {
				biggestNeg = -Math.abs(matrix[i][j]);
			}
		}
	}

	if (negCount % 2 == 0) {
		return absSum;
	}
	return absSum + 2 * biggestNeg;
};
