/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
	/**
	 * Index 0 will always be counted. So simply find the smallest and second smallest numbers.
	 */
	let min = nums[1];
	let min2 = Infinity;
	for (let i = 2; i < nums.length; i++) {
		if (nums[i] <= min) {
			min2 = min;
			min = nums[i];
		} else if (nums[i] < min2) {
			min2 = nums[i];
		}
	}
	return nums[0] + min + min2;
};
