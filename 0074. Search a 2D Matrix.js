/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	// Treat this as a single sorted list instead of a matrix
	const m = matrix.length;
	const n = matrix[0].length;

	let l = 0;
	let r = m * n - 1;

	// For converting a single index of sorted list to i,j coordinates.
	const getVal = (index) => {
		const i = Math.floor(index / n);
		const j = index % n;
		return matrix[i][j];
	};

	while (l <= r) {
		const m = Math.floor((l + r) / 2);
		const v = getVal(m);

		if (v < target) {
			l = m + 1;
		} else if (v > target) {
			r = m - 1;
		} else {
			return true;
		}
	}

	return false;
};
