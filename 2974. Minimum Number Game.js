/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
	// Sort
	nums.sort((a, b) => a - b);

	// Swap adjacent values
	for (let i = 0; i < nums.length; i += 2) {
		const temp = nums[i];
		nums[i] = nums[i + 1];
		nums[i + 1] = temp;
	}

	return nums;
};
