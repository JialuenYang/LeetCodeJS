/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let max1 = 0;
	let index1 = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max1) {
			max1 = nums[i];
			index1 = i;
		}
	}
	nums[index1] = 0;
	let max2 = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max2) {
			max2 = nums[i];
		}
	}
	return (max1 - 1) * (max2 - 1);
};
