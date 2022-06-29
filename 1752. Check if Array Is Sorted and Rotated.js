/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
	// Simply loop through until the first non-decreasing pair.
	// If there's another non-decreasing pair after, return false.
	// Remember to check the first and last numbers if it's rotated.
	let rotated = false;
	let index = nums.length;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			index = i + 1;
			rotated = true;
			break;
		}
	}
	for (let i = index; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			return false;
		}
	}
	return rotated ? nums[nums.length - 1] <= nums[0] : true;
};
