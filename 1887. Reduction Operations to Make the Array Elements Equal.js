/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
	// First choice was to use a map to keep track of duplicates and then sort and add up all counts;
	// This method skips all that and just starts adding up after sorting.
	nums.sort((a, b) => a - b);
	let output = 0;
	// Cleverly adds from right to left
	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i] != nums[i - 1]) {
			output += nums.length - i;
		}
	}
	return output;
};
