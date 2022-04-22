/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	// The go-to solution is probably with a set of nums and just loop from 0 to n and find the missing numbers.
	// The follow up condition is O(1) space complexity, which means we must use the nums array to keep track of the numbers.

	const output = [];
	// Modify the array in place with a negative to mark which number we've been through already.
	for (let i = 0; i < nums.length; i++) {
		const x = Math.abs(nums[i]);
		nums[x - 1] = -1 * Math.abs(nums[x - 1]);
	}
	// For each unmarked number, push it to the output array.
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			output.push(i + 1);
		}
	}
	return output;
};
