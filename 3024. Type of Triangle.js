/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
	nums.sort((a, b) => a - b);

	if (nums[0] + nums[1] <= nums[2]) {
		return "none";
	}

	// No need to check for middle number because array is sorted
	if (nums[0] == nums[2]) {
		return "equilateral";
	}

	if (nums[0] == nums[1] || nums[1] == nums[2]) {
		return "isosceles";
	}

	return "scalene";
};
