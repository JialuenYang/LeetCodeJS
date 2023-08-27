/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
	const elementSum = nums.reduce((acc, cur) => (acc += cur), nums[0]);
	const digitSum = nums.reduce((acc, cur) => {
		while (cur > 0) {
			acc += cur % 10;
			cur = Math.floor(cur / 10);
		}
		return acc;
	}, nums[0]);

	return Math.abs(elementSum - digitSum);
};
