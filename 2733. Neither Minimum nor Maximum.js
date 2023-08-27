/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
	if (nums.length <= 2) {
		return -1;
	}

	// No need to check the whole array. Only need the first 3 elements. So it's O(1) for time and space.
	const arr = [];
	for (let i = 0; i < 3; i++) {
		arr.push(nums[i]);
	}
	arr.sort((a, b) => a - b);
	return arr[1];
};
