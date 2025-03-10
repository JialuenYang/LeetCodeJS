/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
	let evenCount = 0;
	nums.forEach((num) => {
		if (num % 2 == 0) {
			evenCount++;
		}
	});
	for (let i = 0; i < evenCount; i++) {
		nums[i] = 0;
	}
	for (let i = evenCount; i < nums.length; i++) {
		nums[i] = 1;
	}
	return nums;
};
