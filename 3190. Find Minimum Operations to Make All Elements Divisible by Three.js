/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	/**
	 * Remainder can only be 0, 1 or 2.
	 * If it's 0, it's divisible by 3.
	 * If it's 1, subtract by 1.
	 * If it's 2, add 1.
	 */
	let ops = 0;
	for (const num of nums) {
		if (num % 3 >= 1) {
			ops++;
		}
	}
	return ops;
};
