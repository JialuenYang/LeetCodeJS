/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	// Turn the array of numbers into a set.
	const set = new Set(nums);
	// Start from 1. Keep adding 1 until the set doesn't contain it.
	for (let i = 1; ; i++) {
		if (!set.has(i)) {
			return i;
		}
	}
};
