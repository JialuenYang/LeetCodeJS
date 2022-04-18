/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// Loop through the array
	for (let index1 = 0; index1 < nums.length - 1; index1++) {
		// Find the index of the second number via search. If it doesn't exist, returns -1.
		// Also, indexOf() is O(n). I'll need to write a binary search function for the ideal O(log(n))
		const index2 = nums.indexOf(target - nums[index1], index1 + 1);
		if (index2) {
			return [index1, index2];
		}
	}
};
