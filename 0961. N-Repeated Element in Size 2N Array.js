/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	// There are other mathmatically faster solutions.
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			return nums[i];
		}
		set.add(nums[i]);
	}
};
