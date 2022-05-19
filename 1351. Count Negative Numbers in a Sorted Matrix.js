/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	// Would be faster with binary search
	let output = 0;
	for (const line of grid) {
		for (let i = line.length - 1; i >= 0; i--) {
			if (line[i] < 0) {
				output++;
			} else {
				break;
			}
		}
	}
	return output;
};
