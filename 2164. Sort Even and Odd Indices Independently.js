/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
	if (nums.length <= 2) {
		return nums;
	}
	// Separate even and odd
	const even = [];
	const odd = [];
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 == 0) {
			even.push(nums[i]);
		} else {
			odd.push(nums[i]);
		}
	}
	// Sort based on requirements
	even.sort((a, b) => a - b);
	odd.sort((a, b) => b - a);
	// Place values back to nums array
	for (let i = 0; i < even.length; i++) {
		nums[i * 2] = even[i];
	}
	for (let i = 0; i < odd.length; i++) {
		nums[i * 2 + 1] = odd[i];
	}
	return nums;
};
