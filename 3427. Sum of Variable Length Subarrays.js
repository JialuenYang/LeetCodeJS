/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
	/**
	 * Create an array to keep track of the ranges of the numbers to add
	 */
	const arr = new Array(nums.length + 1).fill(0);
	for (let i = 0; i < nums.length; i++) {
		arr[Math.max(0, i - nums[i])]++;
		arr[i + 1]--;
	}
	let output = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		count += arr[i];
		output += nums[i] * count;
	}
	return output;
};
