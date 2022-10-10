/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	// Keeps track of the least number of steps needed to reach end
	const memo = [];
	memo[nums.length - 1] = 0;
	for (let i = nums.length - 2; i >= 0; i--) {
		let min = Infinity;
		for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
			min = Math.min(min, memo[j]);
		}
		memo[i] = min + 1;
	}
	return memo[0];
};
