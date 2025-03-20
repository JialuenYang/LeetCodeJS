/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
	// Total: 1, 5, 13, 25,
	// Diff:    4, 8, 12

	// 1 + 4 * (1 + 2 + 3 + 4...)

	// return 1 + 4 * (n - 1) * n / 2;

	return 1 + 2 * (n - 1) * n;
};
