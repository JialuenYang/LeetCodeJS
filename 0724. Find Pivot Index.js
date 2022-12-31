/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let leftSum = 0;
	let rightSum = 0;
	for (let i = 1; i < nums.length; i++) {
		rightSum += nums[i];
	}

	if (leftSum == rightSum) {
		return 0;
	}

	for (let i = 1; i < nums.length; i++) {
		leftSum += nums[i - 1];
		rightSum -= nums[i];
		if (leftSum == rightSum) {
			return i;
		}
	}
	return -1;
};
