/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
	// Use left and right sum to determine the valid selection count.
	let validCount = 0;
	let leftSum = 0;
	let rightSum = nums.reduce((acc, cur) => acc + cur, 0) - nums[0];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			leftSum += nums[i];
		} else {
			if (leftSum == rightSum + 1 || leftSum + 1 == rightSum) {
				// Can only go one direction
				validCount++;
			} else if (leftSum == rightSum) {
				// Can go both left and right directions
				validCount += 2;
			}
		}
		rightSum -= nums[i + 1] ?? 0;
	}

	return validCount;
};
