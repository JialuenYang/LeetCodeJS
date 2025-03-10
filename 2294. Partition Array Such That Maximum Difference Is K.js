/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
	nums.sort((a, b) => a - b);

	let output = 0;

	let i = 0;
	while (i < nums.length) {
		const min = nums[i];
		while (nums[i] - min <= k) {
			i++;
		}
		output++;
	}

	return output;
};
