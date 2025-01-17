/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
	/**
	 * Use a separate array to keep track of the ranges with +1 and -1. Then use a number to keep track of the total sum as we move from left to right.
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */

	// Array length is num.length + 1 because the query range includes the last index too.
	// We won't use the final index in the next for loop.
	const range = new Array(nums.length + 1).fill(0);
	for (const query of queries) {
		range[query[0]]++;
		range[query[1] + 1]--;
	}

	let num = 0;
	for (let i = 0; i < nums.length; i++) {
		num += range[i];
		if (num < nums[i]) {
			return false;
		}
	}
	return true;
};
