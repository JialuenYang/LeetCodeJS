/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
	let output = 0;

	for (operation of operations) {
		if (operation[1] === "+") {
			output++;
		} else {
			output--;
		}
	}

	return output;
};
