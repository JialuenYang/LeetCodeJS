/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
	// Time complexity: O(n)
	let maxDiff = -1;
	let minNum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > minNum) {
			maxDiff = Math.max(maxDiff, nums[i] - minNum);
		}
		minNum = Math.min(minNum, nums[i]);
	}
	return maxDiff;
};
