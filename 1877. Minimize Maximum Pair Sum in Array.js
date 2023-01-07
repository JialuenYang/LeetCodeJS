/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
	nums.sort((a, b) => a - b);
	let minMaxSum = 0;
	for (let i = 0; i < nums.length / 2; i++) {
		minMaxSum = Math.max(minMaxSum, nums[i] + nums[nums.length - 1 - i]);
	}
	return minMaxSum;
};
