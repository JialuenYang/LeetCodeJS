/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
	nums.sort((a, b) => a - b);
	let min = Infinity;
	for (let i = 0; i < nums.length / 2; i++) {
		min = Math.min(min, (nums[i] + nums[nums.length - 1 - i]) / 2);
	}
	return min;
};
