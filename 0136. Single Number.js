/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// XOR will turn all two copies into 0's. The one remaining will be the correct answer.
	let output = nums[0];
	for (let i = 1; i < nums.length; i++) {
		output ^= nums[i];
	}
	return output;
};
