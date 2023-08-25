/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
	const temp = [];
	while (nums.length != 1) {
		for (let i = 1; i < nums.length; i++) {
			temp.push((nums[i - 1] + nums[i]) % 10);
		}
		nums = [...temp];
		temp.length = 0;
	}

	return nums;
};
