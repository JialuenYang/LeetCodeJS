/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	// First 2 are outliers
	const output = [[1]];
	if (numRows == 1) {
		return output;
	}
	output.push([1, 1]);
	if (numRows == 2) {
		return output;
	}

	// Add nums from previous row
	for (let i = 3; i <= numRows; i++) {
		const row = [];
		row.push(1);
		for (let j = 0; j < output[i - 2].length - 1; j++) {
			row.push(output[i - 2][j] + output[i - 2][j + 1]);
		}
		row.push(1);
		output.push(row);
	}

	return output;
};
