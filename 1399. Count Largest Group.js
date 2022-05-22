/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
	// Find the largest group size and fill the map with various group sizes.
	let largest = 0;
	const map = new Map();
	for (let i = 1; i <= n; i++) {
		const digitSum = getDigitSum(i);
		if (map.has(digitSum)) {
			map.set(digitSum, map.get(digitSum) + 1);
		} else {
			map.set(digitSum, 1);
		}
		largest = Math.max(largest, map.get(digitSum));
	}
	// Count the number of largest group size
	let output = 0;
	for (const val of map.values()) {
		if (val == largest) {
			output++;
		}
	}
	return output;
};

var getDigitSum = function (num) {
	let sum = 0;
	while (num > 0) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	return sum;
};
