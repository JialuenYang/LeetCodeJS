/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
	// Might be better to use heap or bruteforce to find the biggest 3 and smallest 2 numbers.
	// The key is knowing that you can only get the largest product with 3 largest positive numbers or 2 smallest negatives * 1 largest positive.
	nums.sort((a, b) => a - b);
	const right3Max =
		nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
	if (nums[1] < 0) {
		return Math.max(right3Max, nums[0] * nums[1] * nums[nums.length - 1]);
	}
	return right3Max;
};
