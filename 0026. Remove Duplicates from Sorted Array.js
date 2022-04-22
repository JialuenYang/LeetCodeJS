/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let index = 0;
	let index2 = 0;
	while (index2 < nums.length) {
		while (nums[index] == nums[index2]) index2++;
		if (index2 >= nums.length) continue;
		index++;
		nums[index] = nums[index2];
	}
	return index + 1;
};
