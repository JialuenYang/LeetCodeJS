/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	// Running time is O(n)
	let currSum = 0;
	let maxSum = -Infinity;
	for (const n of nums) {
		currSum += n;
		maxSum = Math.max(maxSum, currSum);
		// If the current sum is <= 0, then we don't care about it.
		if (currSum <= 0) {
			currSum = 0;
		}
	}
	return maxSum;
};
