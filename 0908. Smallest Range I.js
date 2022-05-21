/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
	// We only care about the largest and smallest values.
	let smallestNum = nums[0];
	let largestNum = nums[0];
	for (const num of nums) {
		if (num < smallestNum) {
			smallestNum = num;
		}
		if (num > largestNum) {
			largestNum = num;
		}
	}
	// The point of k is to lower the difference by 2 * k
	const diff = largestNum - smallestNum - 2 * k;
	// There's a chance that 2 * k brings both values past each other
	if (diff < 0) {
		return 0;
	}
	return diff;
};
