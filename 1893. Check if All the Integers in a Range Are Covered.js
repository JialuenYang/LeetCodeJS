/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
	// Problem limits the numbers to be 50, so we can just loop through all the ranges and mark the included integers.
	const numberLine = new Array(50).fill(false);
	ranges.forEach((range) => {
		for (let i = range[0] - 1; i < range[1]; i++) {
			numberLine[i] = true;
		}
	});

	for (let i = left - 1; i < right; i++) {
		if (!numberLine[i]) {
			return false;
		}
	}
	return true;
};
