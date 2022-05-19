/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
	// Remember that sort() modifies the original array, so you need to make a new deep copy.
	const sorted = [...heights].sort((a, b) => a - b);
	let output = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] != sorted[i]) {
			output++;
		}
	}
	return output;
};
