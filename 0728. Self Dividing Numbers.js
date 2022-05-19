/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	// Convert each num to string and then check for zero and selfDivide.
	const output = [];
	for (let i = left; i <= right; i++) {
		const str = i.toString();
		if (str.includes("0")) {
			continue;
		}
		let selfDivide = true;
		for (const c of str) {
			if (i % parseInt(c) != 0) {
				selfDivide = false;
				break;
			}
		}
		if (selfDivide) {
			output.push(i);
		}
	}
	return output;
};
