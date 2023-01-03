/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
	// Get the indices of min and max nums
	let minIndex = 0;
	let min = Infinity;
	let maxIndex = 0;
	let max = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
			maxIndex = i;
		}
		if (nums[i] < min) {
			min = nums[i];
			minIndex = i;
		}
	}

	const left = minIndex < maxIndex ? minIndex : maxIndex;
	const right = minIndex < maxIndex ? maxIndex : minIndex;

	// Compare which one is lower: Remove from left or right or both
	const removeFromLeft = right + 1;
	const removeFromRight = nums.length - left;
	const removeLeftRight = left + 1 + nums.length - right;
	return Math.min(removeFromLeft, removeFromRight, removeLeftRight);
};
