/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	const odd = [];
	const even = [];
	for (const num of nums) {
		if (num % 2 == 0) {
			even.push(num);
		} else {
			odd.push(num);
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 == 0) {
			nums[i] = even.pop();
		} else {
			nums[i] = odd.pop();
		}
	}
	return nums;
};
