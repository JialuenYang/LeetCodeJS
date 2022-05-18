/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
	let output = 0;
	let sum = 0;
	for (const g of gain) {
		sum += g;
		if (sum > output) {
			output = sum;
		}
	}
	return output;
};
