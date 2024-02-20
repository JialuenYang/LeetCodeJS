/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
	nums.sort((a, b) => a - b);
	const set = new Set();
	for (let i = 0; i < nums.length / 2; i++) {
		set.add((nums[i] + nums[nums.length - 1 - i]) / 2);
	}
	console.log(set);
	return set.size;
};
