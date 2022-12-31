/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
	let answer = 0;
	const columns = strs[0].length;
	// Go through column by column
	for (let i = 0; i < columns; i++) {
		let row = 1;
		// Iterate through the rows
		while (row < strs.length && strs[row][i] >= strs[row - 1][i]) {
			row++;
		}
		if (row != strs.length) {
			answer++;
		}
	}
	return answer;
};
