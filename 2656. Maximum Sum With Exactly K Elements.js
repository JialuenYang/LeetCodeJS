/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
	const maxNum = Math.max(...nums);
	return ((2 * maxNum + k - 1) * k) / 2;
};
