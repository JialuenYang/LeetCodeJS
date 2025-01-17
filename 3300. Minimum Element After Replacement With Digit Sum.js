/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
	const digitsSum = (num) => {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		return sum;
	};

	let min = Infinity;
	for (const num of nums) {
		min = Math.min(min, digitsSum(num));
	}
	return min;
};
