/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
	const [index1, max1] = findMax(nums);
	nums[index1] = -1;
	const [index2, max2] = findMax(nums);
	const [index3, min1] = findMin(nums);
	nums[index3] = 10 ** 4;
	const [index4, min2] = findMin(nums);
	return max1 * max2 - min1 * min2;
};

function findMax(nums) {
	let max = 0;
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
			index = i;
		}
	}
	return [index, max];
}

function findMin(nums) {
	let min = 10 ** 4;
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < min && nums[i] > 0) {
			min = nums[i];
			index = i;
		}
	}
	return [index, min];
}
