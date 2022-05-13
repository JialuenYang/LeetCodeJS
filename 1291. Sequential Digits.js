/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
	// Simply substring 1 to 9 to always get increasing consecutive numbers.
	const str = "123456789";
	let start = 0;
	let end = String(low).length;
	let nEnd = end;
	const output = [];

	let num = parseInt(str.substring(start, end));

	while (num <= high && nEnd < 10) {
		if (num >= low) {
			output.push(num);
		}

		if (end + 1 > 9) {
			start = 0;
			nEnd++;
			end = nEnd;
		} else {
			start++;
			end++;
		}
		num = parseInt(str.substring(start, end));
	}
	return output;
};
