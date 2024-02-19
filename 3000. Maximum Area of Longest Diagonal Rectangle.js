/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
	let longestLength = 0;
	let largestArea = 0;
	for (const dimension of dimensions) {
		const length = dimension[0] ** 2 + dimension[1] ** 2;
		if (length > longestLength) {
			longestLength = length;
			// New longest diagonal so reset the largest area. Note: My old solution is a second for loop. This skips that.
			largestArea = 0;
		}
		// Set the newest largest area
		if (length == longestLength) {
			largestArea = Math.max(largestArea, dimension[0] * dimension[1]);
		}
	}

	return largestArea;
};
