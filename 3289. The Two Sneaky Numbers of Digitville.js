/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
	/**
	 * The hard part is doing this with O(1) space complexity. Otherwise, we can simply add to a set.
	 * Since the numbers are from 0 to n-1, nums.length is always n + 1.
	 * We can use the numbers as indices to keep track of frequency by adding nums.length to the numbers.
	 * Then we subtract by 2 * nums.length after to see if any numbers are positive, if so, the index appeared twice.
	 *
	 * Note: Intuition is to use negative numbers, but 0 exists and that would make the logic more complex.
	 *
	 * https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6246522/time-on-space-o1-no-bit-manipulation-jus-mal1
	 */
	for (let i = 0; i < nums.length; i++) {
		nums[nums[i] % nums.length] += nums.length;
	}

	const output = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] - 2 * nums.length >= 0) {
			output.push(i);
		}
	}
	return output;
};
