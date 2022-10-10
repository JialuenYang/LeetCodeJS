/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	// Use an array to keep track of possibility of reaching the end
	// Fill it from the end to start
	const memo = new Array(nums.length).fill(false);
	memo[nums.length - 1] = true;
	for (let i = nums.length - 2; i >= 0; i--) {
		for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
			if (memo[j]) {
				memo[i] = true;
				break;
			}
		}
	}
	return memo[0];
};
