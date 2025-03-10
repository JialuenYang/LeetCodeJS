/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
	let sum = 0;
	for (let num of nums) {
		let largestDigit = 0;
		let digits = 0;
		while (num > 0) {
			largestDigit = Math.max(largestDigit, num % 10);
			num = Math.floor(num / 10);
			digits++;
		}

		// Clever way of getting any length of 1's
		sum += (largestDigit * (10 ** digits - 1)) / 9;
	}

	return sum;
};
