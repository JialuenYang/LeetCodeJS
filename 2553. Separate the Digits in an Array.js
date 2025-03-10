/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
	/**
	 * Alternatively, you can write a one liner: nums.join('').split('').map(Number)
	 */
	const output = [];
	for (let i = nums.length - 1; i >= 0; i--) {
		while (nums[i] > 0) {
			output.push(nums[i] % 10);
			nums[i] = Math.floor(nums[i] / 10);
		}
	}
	return output.reverse();
};
