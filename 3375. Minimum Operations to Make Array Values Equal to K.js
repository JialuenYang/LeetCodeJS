/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
	// The operation only lowers values, so if there are any numbers less than k, then this won't work.
	for (const num of nums) {
		if (num < k) {
			return -1;
		}
	}

	// The remaining numbers are all greater than or equal to k.
	// So we either have to lower all numbers to k or lower only the numbers bigger than k to k.
	const distinctNums = new Set(nums);

	if (distinctNums.has(k)) {
		return distinctNums.size - 1;
	}
	return distinctNums.size;
};
