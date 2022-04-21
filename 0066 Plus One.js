/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	// If all the digits are 9, then output length is added by one.
	let nineCount = 0;
	digits.forEach((ele) => {
		if (ele == 9) {
			nineCount++;
		}
	});
	if (nineCount == digits.length) {
		const newDigits = new Array(digits.length + 1).fill(0);
		newDigits[0] = 1;
		return newDigits;
	}

	// Output length is the same as digits.length. We can edit the digits array in place.
	digits[digits.length - 1] += 1;
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] == 10) {
			digits[i] = 0;
			digits[i - 1] += 1;
		} else {
			break;
		}
	}

	return digits;
};
