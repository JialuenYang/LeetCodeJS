/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
	// Base case of start = i
	if (nums[start] == target) {
		return 0;
	}
	let increment = 1;
	// Keep going left and right to find the nearest target
	while (true) {
		if (
			(start + increment < nums.length && nums[start + increment] == target) ||
			(start - increment < nums.length && nums[start - increment] == target)
		) {
			return increment;
		}
		increment++;
	}
};
