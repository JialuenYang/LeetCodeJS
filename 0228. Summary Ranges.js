/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	const output = [];
	for (let i = 0; i < nums.length; i++) {
		const arr = [];
		if (i == 0 || nums[i] - nums[i - 1] != 1) {
			arr.push(nums[i].toString());
		}
		if (nums[i + 1] - nums[i] == 1) {
			while (nums[i + 1] - nums[i] == 1) {
				i++;
			}
			arr.push(nums[i].toString());
		}
		output.push(arr.join("->"));
	}
	return output;
};
