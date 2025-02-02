/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
	let maxDiff = Math.abs(nums[0] - nums[nums.length - 1]);
	for (let i = 0; i < nums.length - 1; i++) {
		maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i + 1]));
	}
	return maxDiff;
};
