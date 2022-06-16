/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
	const output = [];
	for (let i = 0; i < nums.length; i++) {
		output.splice(index[i], 0, nums[i]);
	}
	return output;
};
