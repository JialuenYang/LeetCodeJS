/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	/**
	 * Start from right side and move to the left until a duplicate is encountered.
	 * Then calculate how many operations are needed to remove everyting left of and including the duplicate.
	 */
	const distinct = new Set();
	let i = nums.length - 1;
	while (i >= 0) {
		if (distinct.has(nums[i])) {
			// Index i has duplicate number.
			// Arrays start at 0 so we need to add 1 to get the total numbers that need to be removed including this index.
			return Math.ceil((i + 1) / 3);
		}
		distinct.add(nums[i]);
		i--;
	}

	// When we reach this point, all numbers are in the set and they are all distinct.
	return 0;
};
