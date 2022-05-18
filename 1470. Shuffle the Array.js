/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	// Can improve to be O(1) space
	const output = [];
	for (let i = 0; i < n; i++) {
		output.push(nums[i]);
		output.push(nums[n + i]);
	}
	return output;
};
