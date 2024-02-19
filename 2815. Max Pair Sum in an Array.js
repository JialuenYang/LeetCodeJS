/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
	// Use a length 9 array to keep track of the largest 2 numbers with matching largest digit.
	const digits = [...Array(9)].map(() => []);

	for (const num of nums) {
		let tempNum = num;
		let maxDigit = -1;
		while (tempNum > 0) {
			maxDigit = Math.max(maxDigit, tempNum % 10);
			tempNum = Math.floor(tempNum / 10);
		}

		// digits array has 9 elements but it's 0-index
		maxDigit--;

		if (digits[maxDigit].length <= 1) {
			digits[maxDigit].push(num);
		} else {
			if (digits[maxDigit][0] < digits[maxDigit][1]) {
				digits[maxDigit][0] = Math.max(digits[maxDigit][0], num);
			} else {
				digits[maxDigit][1] = Math.max(digits[maxDigit][1], num);
			}
		}
	}

	let maxSum = -1;
	for (let i = 0; i < digits.length; i++) {
		if (digits[i].length == 2) {
			maxSum = Math.max(maxSum, digits[i][0] + digits[i][1]);
		}
	}

	return maxSum;
};
