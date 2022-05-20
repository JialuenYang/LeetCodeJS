/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
	// Just do as the prompt asks
	for (let i = 0; i < nums.length; i++) {
		if (i % 10 == nums[i]) {
			return i;
		}
	}
	return -1;
};
