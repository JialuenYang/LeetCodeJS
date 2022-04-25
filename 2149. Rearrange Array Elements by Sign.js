/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
	// Trivial solution is to have 2 indices to keep track of positive and negative numbers.
	// A better solution is to populate the output array by the nums[i] itself, since we know beforehand where it'll go.
	const output = new Array(nums.length);
	let odd = 0;
	let even = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			output[odd] = nums[i];
			odd += 2;
		} else {
			output[even] = nums[i];
			even += 2;
		}
	}
	return output;
};
