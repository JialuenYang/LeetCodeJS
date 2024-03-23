/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	// Use two pointers. Snowball method.
	// One pointer will be at the first zero
	// One pointer will be at the first non-zero after a zero
	// Swap them (or in this case, set zero to number and number to zero)
	let zero = 0;
	let nonZ = 0;
	while (true) {
		while (nums[zero] != 0) {
			zero++;
			if (zero >= nums.length - 1) {
				return;
			}
		}

		// Make sure nonZ is an index after a zero
		if (nonZ < zero) {
			nonZ = zero + 1;
		}

		while (nums[nonZ] == 0) {
			nonZ++;
			if (nonZ >= nums.length) {
				return;
			}
		}

		nums[zero] = nums[nonZ];
		nums[nonZ] = 0;
	}
};
