/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
	// You need to understand the problem first.
	// In order to maximize the output, we need to pair all the big numbers together.
	// So sort first, then get the 0th, 2nd, 4th, etc. value.
	nums.sort((a, b) => a - b);
	let output = 0;
	for (let i = 0; i < nums.length; i += 2) {
		output += nums[i];
	}
	return output;
};
