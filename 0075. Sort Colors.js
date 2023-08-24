/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	const colorCount = [0, 0, 0];
	nums.forEach((num) => colorCount[num]++);
	for (let i = 0; i < colorCount[0]; i++) {
		nums[i] = 0;
	}
	const start1 = colorCount[0] + colorCount[1];
	for (let i = colorCount[0]; i < start1; i++) {
		nums[i] = 1;
	}
	const start2 = start1 + colorCount[2];
	for (let i = start1; i < start2; i++) {
		nums[i] = 2;
	}
};
