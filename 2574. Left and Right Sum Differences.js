/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
	let leftSum = 0;
	let rightSum = nums.reduce((acc, cur) => acc + cur, 0) - nums[0];
	const output = [];
	for (let i = 0; i < nums.length; i++) {
		output.push(Math.abs(leftSum - rightSum));
		leftSum += nums[i];
		rightSum -= nums[i + 1];
	}
	return output;
};
