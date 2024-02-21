/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
	nums.sort((a, b) => b - a);
	let i = 0;
	while (nums[i] >= nums[i + 1] + nums[i + 2]) {
		i++;
	}

	return i > nums.length - 3 ? 0 : nums[i] + nums[i + 1] + nums[i + 2];
};
