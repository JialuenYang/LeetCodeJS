/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
	let isRotated = false;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			if (isRotated) {
				return false;
			}
			isRotated = true;
			if (nums[nums.length - 1] > nums[0]) {
				return false;
			}
		}
	}
	return true;
};
