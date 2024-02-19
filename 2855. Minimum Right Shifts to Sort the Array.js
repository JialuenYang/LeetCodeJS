/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
	let numOfDecreases = 0;
	if (nums[0] < nums[nums.length - 1]) {
		numOfDecreases++;
	}

	let output = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			numOfDecreases++;
			if (numOfDecreases >= 2) {
				return -1;
			}
			output = nums.length - i - 1;
		}
	}

	return output;
};
