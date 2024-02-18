// Reference: https://www.youtube.com/watch?v=quAS1iydq7U

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let i = nums.length - 2;
	while (nums[i] >= nums[i + 1]) {
		i--;
	}

	if (i == -1) {
		nums = nums.reverse();
		return;
	}

	let j = nums.length - 1;
	while (nums[i] >= nums[j]) {
		j--;
	}

	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;

	// Reverse subarray in place
	for (let k = i + 1; k < i + (nums.length - i) / 2; k++) {
		const n = nums[k];
		const swapIndex = nums.length - 1 - (k - (i + 1));
		nums[k] = nums[swapIndex];
		nums[swapIndex] = n;
	}
};
