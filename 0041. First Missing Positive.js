/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	// Swap the values in-place until it looks like [1, 2, 3....] and the missing smallest positive number will be obvious.
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		while (num > 0 && num <= nums.length && nums[i] != nums[num - 1]) {
			// Be careful of all edge cases. Swapping 1 with 1 will cause infinite loop without 3rd condition.
			// Swap
			nums[i] = nums[num - 1];
			nums[num - 1] = num;

			// Prepare for next swap
			num = nums[i];
		}
	}

	let i = 0;
	while (i < nums.length) {
		if (nums[i] != i + 1) {
			return i + 1;
		}
		i++;
	}
	return i + 1;
};
