/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	// Use two pointers to compare values
	const output = [];
	let left = 0;
	let right = nums.length - 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		const leftSquared = nums[left] * nums[left];
		const rightSquared = nums[right] * nums[right];
		if (leftSquared >= rightSquared) {
			output[i] = leftSquared;
			left++;
		} else {
			output[i] = rightSquared;
			right--;
		}
	}
	return output;
};
