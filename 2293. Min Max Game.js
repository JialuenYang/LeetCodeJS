/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
	if (nums.length == 1) {
		return nums[0];
	}
	const newNums = [];
	for (let i = 0; i < nums.length; i += 2) {
		if (i % 4 == 0) {
			newNums.push(Math.min(nums[i], nums[i + 1]));
		} else {
			newNums.push(Math.max(nums[i], nums[i + 1]));
		}
	}
	return minMaxGame(newNums);
};
