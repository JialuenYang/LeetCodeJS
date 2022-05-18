/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	// O(n) time and O(1) space
	let prevSum = 0;
	for (let i = 0; i < nums.length; i++) {
		nums[i] = prevSum + nums[i];
		prevSum = nums[i];
	}
	return nums;
};
