/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
	let current = nums[0];
	let output = 0;

	// Compare next number and add to current sum.
	for (let i = 0; i < nums.length; i++) {
		if (nums[i + 1] > nums[i]) {
			current += nums[i + 1];
		} else {
			if (current > output) {
				output = current;
			}
			current = nums[i + 1];
		}
	}
	return output;
};
